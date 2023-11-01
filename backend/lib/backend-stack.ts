import * as cdk from 'aws-cdk-lib'
import { Construct } from 'constructs'
import { createCognitoAuth } from './auth/cognito'
import { createExpenseBucket } from './storage/receiptBucket'
import { createAmplifyGraphQLAPI } from './api/appsync'

export class BackendStack extends cdk.Stack {
	constructor(scope: Construct, id: string, props?: cdk.StackProps) {
		super(scope, id, props)

		const appName = 'expense-example'
		const auth = createCognitoAuth(this, {
			appName,
		})

		const expenseBucket = createExpenseBucket(this, {
			authRole: auth.identityPool.authenticatedRole,
			unauthRole: auth.identityPool.unauthenticatedRole,
		})

		const api = createAmplifyGraphQLAPI(this, {
			appName,
			authRole: auth.identityPool.authenticatedRole,
			unauthRole: auth.identityPool.unauthenticatedRole,
			bucket: expenseBucket,
			userpool: auth.userPool,
			identityPoolId: auth.identityPool.identityPoolId,
		})

		new cdk.CfnOutput(this, 'UserpoolId', {
			value: auth.userPool.userPoolId,
		})
		new cdk.CfnOutput(this, 'IdentityPoolId', {
			value: auth.identityPool.identityPoolId,
		})
		new cdk.CfnOutput(this, 'WebClientId', {
			value: auth.userPoolClient.userPoolClientId,
		})

		new cdk.CfnOutput(this, 'BucketName', {
			value: expenseBucket.bucketName,
		})
	}
}
