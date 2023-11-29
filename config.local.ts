import backendstackInfo from './backend/cdk-output.json'
export const awsconfig = {
	aws_project_region: backendstackInfo.ExpenseBackendStack.awsAppsyncRegion,
	Auth: {
		userPoolId: backendstackInfo.ExpenseBackendStack.UserpoolId,
		userPoolWebClientId: backendstackInfo.ExpenseBackendStack.WebClientId,
		identityPoolId: backendstackInfo.ExpenseBackendStack.IdentityPoolId,
		region: backendstackInfo.ExpenseBackendStack.awsAppsyncRegion,
	},
	Storage: {
		AWSS3: {
			bucket: backendstackInfo.ExpenseBackendStack.BucketName,
			region: backendstackInfo.ExpenseBackendStack.awsAppsyncRegion,
		},
	},
	aws_appsync_graphqlEndpoint:
		backendstackInfo.ExpenseBackendStack.awsAppsyncApiEndpoint,
	aws_appsync_region: backendstackInfo.ExpenseBackendStack.awsAppsyncRegion,
	aws_appsync_authenticationType:
		backendstackInfo.ExpenseBackendStack.awsAppsyncAuthenticationType,
}
