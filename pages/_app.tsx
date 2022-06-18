import Layout from '../components/layout';
import type { AppProps } from 'next/app';
import { RecoilRoot } from "recoil";
import '../styles/globals.css';

const TierList = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <RecoilRoot>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RecoilRoot>
    </>
  )
}

export default TierList;
