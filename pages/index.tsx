import {
	CreateTextractExpenseMutation,
	CreateTextractExpenseMutationVariables,
	Expense,
	ListExpensesQuery,
	OnCreateExpenseSubscriptionVariables,
	OnCreateTextractExpenseSubscription,
	UpdateExpenseInput,
	UpdateExpenseMutation,
} from '@/backend/lib/api/src/API'
import {
	createTextractExpense,
	updateExpense,
} from '@/backend/lib/api/src/graphql/mutations'
import { onCreateTextractExpense } from '@/backend/lib/api/src/graphql/subscriptions'
import { GraphQLQuery, GraphQLSubscription } from '@aws-amplify/api'
import {
	Button,
	Flex,
	Heading,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	TextField,
	View,
	useTheme,
	withAuthenticator,
} from '@aws-amplify/ui-react'
import { API } from 'aws-amplify'
import { FormEvent, useEffect, useState } from 'react'
import { StorageManager, StorageImage } from '@aws-amplify/ui-react-storage'
import '@aws-amplify/ui-react/styles.css'
import { listExpenses } from '@/backend/lib/api/src/graphql/queries'

type HomeProps = {
	user: { username: string }
	signOut: () => void
}
function Home({ user, signOut }: HomeProps) {
	const [date, setDate] = useState('')
	const [merchant, setMerchant] = useState('')
	const [subtotal, setSubtotal] = useState('')
	const [tax, setTax] = useState('')
	const [amount, setAmount] = useState('')
	const [currentExpenseId, setCurrentExpenseId] = useState('')
	const [currentExpenseList, setCurrentExpenseList] = useState<
		Array<Expense> | []
	>([])
	const { tokens } = useTheme()
	console.log(user)
	useEffect(() => {
		const variables: OnCreateExpenseSubscriptionVariables = {
			owner: user.username,
		}
		const sub = API.graphql<
			GraphQLSubscription<OnCreateTextractExpenseSubscription>
		>({
			query: onCreateTextractExpense,
			variables,
		}).subscribe(({ value }) => {
			if (value.data?.onCreateTextractExpense) {
				console.log('the subscribed value', value.data?.onCreateTextractExpense)

				setCurrentExpenseList([
					value.data.onCreateTextractExpense,
					...currentExpenseList,
				])
			}
		})

		return () => {
			sub.unsubscribe()
		}
	}, [user, currentExpenseList])

	useEffect(() => {
		API.graphql<GraphQLQuery<ListExpensesQuery>>({
			query: listExpenses,
		}).then((res) => {
			console.log(res.data?.listExpenses?.items)
			setCurrentExpenseList(res.data?.listExpenses?.items as Expense[])
		})
	}, [])

	const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const variables: UpdateExpenseInput = {
			id: currentExpenseId,
			date,
			merchant,
			subtotal,
			tax,
			amount,
		}
		API.graphql<GraphQLQuery<UpdateExpenseMutation>>({
			query: updateExpense,
			variables: { input: variables },
		}).then((res) => console.log(res.data?.updateExpense))
	}

	const handleUploadSuccess = ({ key }: { key?: string | undefined }) => {
		if (key) {
			const variables: CreateTextractExpenseMutationVariables = {
				receiptS3Key: key,
			}

			API.graphql<GraphQLQuery<CreateTextractExpenseMutation>>({
				query: createTextractExpense,
				variables,
			}).then((res) => {
				console.log(res.data?.createTextractExpense)
				if (res.data?.createTextractExpense) {
					const textractRes = res.data.createTextractExpense
					setDate(textractRes.date)
					setMerchant(textractRes.merchant)
					setSubtotal(textractRes.subtotal)
					setTax(textractRes.tax)
					setAmount(textractRes.amount)
					setCurrentExpenseId(textractRes.id)
				}
			})
		}
	}

	return (
		<View>
			<View as="main">
				<Flex justifyContent={'space-between'} margin={tokens.space.small}>
					<Heading level={2}>Expense AI</Heading>
					<Button onClick={signOut} variation="destructive">
						Sign Out
					</Button>
				</Flex>

				<Flex as="section" justifyContent={'center'} alignItems={'center'}>
					<View
						width={{
							base: '80vw',
							large: '20vw',
						}}
					>
						<StorageManager
							acceptedFileTypes={['image/*']}
							accessLevel="protected"
							maxFileCount={1}
							displayText={{
								dropFilesText: 'drag-and-drop here',
								browseFilesText: 'Open file picker',
							}}
							onUploadSuccess={handleUploadSuccess}
						/>

						<form onSubmit={handleFormSubmit}>
							<Flex direction={'column'}>
								<TextField
									label="date"
									name="date"
									value={date}
									onChange={(e) => setDate(e.target.value)}
								/>
								<TextField
									label="merchant"
									name="merchant"
									value={merchant}
									onChange={(e) => setMerchant(e.target.value)}
								/>
								<TextField
									label="subtotal"
									name="subtotal"
									value={subtotal}
									onChange={(e) => setSubtotal(e.target.value)}
								/>
								<TextField
									label="tax"
									name="tax"
									value={tax}
									onChange={(e) => setTax(e.target.value)}
								/>
								<TextField
									label="amount"
									name="amount"
									value={amount}
									onChange={(e) => setAmount(e.target.value)}
								/>
							</Flex>
							<Flex justifyContent={'end'} marginTop={tokens.space.medium}>
								<Button type="submit" variation="primary">
									Confirm
								</Button>
							</Flex>
						</form>
					</View>
				</Flex>

				<Flex justifyContent={'center'}>
					<Table
						caption=""
						highlightOnHover={false}
						marginTop={tokens.space.large}
						width={{ base: '90vw', large: '70vw' }}
					>
						<TableHead>
							<TableRow>
								<TableCell as="th">Merchant</TableCell>
								<TableCell as="th">Amount</TableCell>
								<TableCell as="th">Receipt</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{currentExpenseList.map((currExpense) => {
								return (
									<TableRow key={currExpense.id}>
										<TableCell>{currExpense.merchant}</TableCell>
										<TableCell>{currExpense.amount}</TableCell>
										<TableCell>
											<StorageImage
												width={'200px'}
												height={'250px'}
												alt={`${currExpense.merchant} receipt`}
												imgKey={currExpense.receiptS3Key}
												accessLevel="protected"
											/>
										</TableCell>
									</TableRow>
								)
							})}
						</TableBody>
					</Table>
				</Flex>
			</View>
		</View>
	)
}

const formFields = {
	signIn: {
		username: {
			placeholder: 'Enter Your Email Here',
			isRequired: true,
			label: 'Email',
		},
	},
	signUp: {
		username: {
			placeholder: 'Enter Your Email Here',
			isRequired: true,
			label: 'Email',
		},
	},
}

export default withAuthenticator(Home, { formFields })
