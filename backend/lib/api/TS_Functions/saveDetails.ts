import { Context } from '@aws-appsync/utils'
import { util } from '@aws-appsync/utils'
import * as ddb from '@aws-appsync/utils/dynamodb'

export function request(ctx: Context) {
	const item = { __typeName: 'Expense', ups: 1 }
	const key = { __typeName: 'Expense' }
	return ddb.put({ key, item })
}

export function response(ctx: Context) {
	return ctx.result
}
