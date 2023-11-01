export const awsconfig = {
	aws_project_region: process.env.NEXT_PUBLIC_appRegion,
	Auth: {
		userPoolId: process.env.NEXT_PUBLIC_userPoolId,
		userPoolWebClientId: process.env.NEXT_PUBLIC_userPoolWebClientId,
		identityPoolId: process.env.NEXT_PUBLIC_identityPoolId,
		region: process.env.NEXT_PUBLIC_appRegion,
	},
	Storage: {
		AWSS3: {
			bucket: process.env.NEXT_PUBLIC_bucketName,
			region: process.env.NEXT_PUBLIC_appRegion,
		},
	},
	aws_appsync_graphqlEndpoint: process.env.NEXT_PUBLIC_appSyncEndpoint,
	aws_appsync_region: process.env.NEXT_PUBLIC_appRegion,
	aws_appsync_authenticationType: process.env.NEXT_PUBLIC_appSyncAuthType,
}
