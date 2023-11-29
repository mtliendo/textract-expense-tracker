import {
	Effect,
	ManagedPolicy,
	PolicyStatement,
	IRole,
} from 'aws-cdk-lib/aws-iam'
import { Bucket, HttpMethods } from 'aws-cdk-lib/aws-s3'
import { Construct } from 'constructs'

type createExpenseBucketProps = {
	authRole: IRole
	unauthRole: IRole
}
export const createExpenseBucket = (
	scope: Construct,
	props: createExpenseBucketProps
) => {
	const expenseBucket = new Bucket(scope, 'expenseBucket', {
		cors: [
			{
				allowedMethods: [
					HttpMethods.GET,
					HttpMethods.POST,
					HttpMethods.PUT,
					HttpMethods.DELETE,
				],
				allowedOrigins: ['*'],
				allowedHeaders: ['*'],
				exposedHeaders: [
					'x-amz-server-side-encryption',
					'x-amz-request-id',
					'x-amz-id-2',
					'ETag',
				],
			},
		],
	})

	const canReadUpdateDeleteFromOwnProtectedDirectory = new PolicyStatement({
		effect: Effect.ALLOW,
		actions: ['s3:PutObject', 's3:GetObject', 's3:DeleteObject'],
		resources: [
			`arn:aws:s3:::${expenseBucket.bucketName}/protected/\${cognito-identity.amazonaws.com:sub}/*`,
		],
	})
	const canReadUpdateDeleteFromPublicDirectory = new PolicyStatement({
		effect: Effect.ALLOW,
		actions: ['s3:PutObject', 's3:GetObject', 's3:DeleteObject'],
		resources: [`arn:aws:s3:::${expenseBucket.bucketName}/public/*`],
	})

	new ManagedPolicy(scope, 'SignedInUserManagedPolicy', {
		description:
			'managed Policy to allow access to s3 bucket by signed in users.',
		statements: [
			canReadUpdateDeleteFromOwnProtectedDirectory,
			canReadUpdateDeleteFromPublicDirectory,
		],
		roles: [props.authRole],
	})

	return expenseBucket
}
