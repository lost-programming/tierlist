import Head from "next/head";

const Title = ({title}: any) => {
  return (
    <Head>
      <title>
        {title} | TierList
      </title>
    </Head>
  )
}

export default Title;