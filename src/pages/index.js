import Head from 'next/head'

import { Header } from '../../components/Header'
import Main from '../../components/Main'
import { Footer } from '../../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Adrian Paun</title>
        <meta name="description" content="Landing Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
