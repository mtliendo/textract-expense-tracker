import { AppSyncIdentityCognito, Context } from '@aws-appsync/utils'
import { util } from '@aws-appsync/utils'
import * as ddb from '@aws-appsync/utils/dynamodb'
import {
	CreateTextractExpenseMutation,
	CreateTextractExpenseMutationVariables,
	Expense,
} from '../src/API'

export function request(ctx: Context<CreateTextractExpenseMutationVariables>) {
	const cognitoIdentity = ctx.identity as AppSyncIdentityCognito
	const item: Expense = {
		__typename: 'Expense',
		owner: cognitoIdentity.sub,
		id: util.autoId(),
		createdAt: util.time.nowISO8601(),
		updatedAt: util.time.nowISO8601(),
		receiptS3Key: ctx.args.receiptS3Key,
		amount: ctx.prev.result.AMOUNT_PAID,
		tax: ctx.prev.result.TAX,
		date: ctx.prev.result.INVOICE_RECEIPT_DATE,
		merchant: ctx.prev.result.VENDOR_NAME,
		subtotal: ctx.prev.result.SUBTOTAL,
	}
	const key = { id: item.id }
	return ddb.put({ key, item })
}

export function response(ctx: Context) {
	return ctx.result
}
