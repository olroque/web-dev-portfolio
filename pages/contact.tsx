import Head from 'next/head';
import Header from '../components/header';
import ContactTop from '../components/contactTop';
import Footer from '../components/footer';

export default function Contact() {
    return (
        <>
            <Head>
                <title>Omar Roque | Contact</title>
            </Head>
            <div>
                <Header />
                <ContactTop />
                <Footer />
            </div>
            </>
    )
}