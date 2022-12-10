import Head from 'next/head';
import Header from '../components/header';
import AboutTop from '../components/aboutTop';
import Footer from '../components/footer';

export default function About() {
    return (
        <>  
            <Head>
                <title>Omar Roque | About</title>
            </Head>
            <div>
                <Header />
                <AboutTop />
                <Footer />
            </div>
        </>
    )
}