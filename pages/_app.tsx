import AppLayout from '../components/AppLayout';
import type { AppProps } from 'next/app'
import '../styles/globals.css'

const TierList = ({ Component, pageProps }: AppProps) => {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  )
}

export default TierList;
