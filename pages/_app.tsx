import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import '@aws-amplify/ui-react/styles.css'
import { Amplify } from 'aws-amplify'
import { awsconfig } from '@/config.sample'
Amplify.configure(awsconfig)

export default function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />
}
