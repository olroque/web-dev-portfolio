import Head from 'next/head';
import Header from '../components/header';
import Main from '../components/main';
import Gallery from '../components/gallery';
import Footer from '../components/footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Omar Roque</title>
      </Head>
      <div >
        <Header />
        <Main />
        <Gallery />
        <Footer />
      </div>
    </>
  )
}
