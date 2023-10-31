import { Context } from '@aws-appsync/utils'

export function request(ctx: Context) {
	console.log('thebucket name', ctx.stash.bucketName)
	console.log('the receipt s3 key', ctx.args.receiptS3Key)
	return {
		resourcePath: '/',
		method: 'POST',
		params: {
			headers: {
				'Content-Type': 'application/x-amz-json-1.1',
				'X-Amz-Target': 'Textract.AnalyzeExpense',
			},
			body: {
				Document: {
					S3Object: {
						Bucket: ctx.stash.bucketName,
						Name: ctx.args.receiptS3Key,
					},
				},
			},
		},
	}
}

export function response(ctx: Context) {
	const res = JSON.parse(ctx.result.body)
	console.log('the summary', res.ExpenseDocuments[0].SummaryFields)

	return ctx.result.body
}
