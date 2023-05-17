import Head from 'next/head';
import Layout from '../../components/Layout';

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>첫번째 글</title>
      </Head>
      <Layout>
        <h1>첫번째 글</h1>
      </Layout>
    </>
  );
}
