import { Construct } from 'constructs'
import {
	AmplifyGraphqlApi,
	AmplifyGraphqlDefinition,
} from '@aws-amplify/graphql-api-construct'
import { UserPool } from 'aws-cdk-lib/aws-cognito'
import { IRole, PolicyStatement } from 'aws-cdk-lib/aws-iam'
import * as path from 'path'
import { Code, FunctionRuntime } from 'aws-cdk-lib/aws-appsync'
import { IBucket } from 'aws-cdk-lib/aws-s3'

type AmplifyGraphQLAPIProps = {
	appName: string
	userpool: UserPool
	authRole: IRole
	unauthRole: IRole
	identityPoolId: string
	bucket: IBucket
}

export const createAmplifyGraphQLAPI = (
	scope: Construct,
	props: AmplifyGraphQLAPIProps
) => {
	const api = new AmplifyGraphqlApi(scope, `${props.appName}`, {
		apiName: `${props.appName}`,
		definition: AmplifyGraphqlDefinition.fromFiles(
			path.join(__dirname, 'schema.graphql')
		),
		authorizationModes: {
			defaultAuthorizationMode: 'AMAZON_COGNITO_USER_POOLS',
			userPoolConfig: {
				userPool: props.userpool,
			},
			iamConfig: {
				identityPoolId: props.identityPoolId,
				unauthenticatedUserRole: props.unauthRole,
				authenticatedUserRole: props.authRole,
			},
		},
	})

	const textractDatasource = api.addHttpDataSource(
		'textractDatasource',
		'https://textract.us-east-1.amazonaws.com',
		{
			authorizationConfig: {
				signingRegion: 'us-east-1',
				signingServiceName: 'textract',
			},
		}
	)

	textractDatasource.grantPrincipal.addToPrincipalPolicy(
		new PolicyStatement({
			resources: ['*'],
			actions: ['textract:AnalyzeExpense'],
		})
	)

	props.bucket.grantRead(textractDatasource)

	const expenseTableDS = api.addDynamoDbDataSource(
		'textractExpenseTableDS',
		api.resources.tables['Expense']
	)

	const textractFunction = api.addFunction('textractFunction', {
		name: 'textractFunction',
		dataSource: textractDatasource,
		runtime: FunctionRuntime.JS_1_0_0,
		code: Code.fromAsset(path.join(__dirname, 'JS_Functions/textract.js')),
	})

	const saveTextractDetailsFunction = api.addFunction(
		'saveTextractDetailsFunction',
		{
			name: 'saveTextractDetailsFunction',
			dataSource: expenseTableDS,
			runtime: FunctionRuntime.JS_1_0_0,
			code: Code.fromAsset(path.join(__dirname, 'JS_Functions/saveDetails.js')),
		}
	)

	api.addResolver('Mutation.createTextractExpense', {
		typeName: 'Mutation',
		fieldName: 'createTextractExpense',
		runtime: FunctionRuntime.JS_1_0_0,
		pipelineConfig: [textractFunction, saveTextractDetailsFunction],
		code: Code.fromInline(`
		export function request(ctx) {
			ctx.stash.bucketName = "${props.bucket.bucketName}"
			return {}
		}

		export function response(ctx) {
			return ctx.prev.result
		}`),
	})

	return api
}
