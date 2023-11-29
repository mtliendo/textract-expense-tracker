import { Context } from '@aws-appsync/utils'

export function request(ctx: Context) {
	console.log('bucketname', ctx.stash.bucketName)
	console.log('receiptkey', ctx.args.receiptS3Key)
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
	console.log('the res', res)
	console.log('the res', res.ExpenseDocuments)
	console.log('the summary', res.ExpenseDocuments[0].SummaryFields)
	const summaryFields = res.ExpenseDocuments[0].SummaryFields
	const response = {} as any
	const expenseFields = [
		'INVOICE_RECEIPT_DATE',
		'SUBTOTAL',
		'VENDOR_NAME',
		'AMOUNT_PAID',
		'TAX',
	]

	summaryFields.forEach((summaryField: any) => {
		if (expenseFields.includes(summaryField.Type.Text)) {
			response[summaryField.Type.Text] = summaryField.ValueDetection.Text
		}
	})

	console.log('the response', response)

	return response
}
