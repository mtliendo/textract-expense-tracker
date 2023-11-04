import {
	util,
	extensions,
	Context,
	AppSyncIdentityCognito,
} from '@aws-appsync/utils'

export function request(ctx: Context) {
	// simplfy return null
	return { payload: null }
}

export function response(ctx: Context) {
	const identity = ctx.identity as AppSyncIdentityCognito
	const filter = {
		owner: { eq: identity.sub },
	}
	extensions.setSubscriptionFilter(util.transform.toSubscriptionFilter(filter))

	// important: return null in the response
	return null
}
