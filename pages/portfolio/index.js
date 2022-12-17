import { API_URL } from '../../config';

import Head from 'next/head';
import Header from '../../components/header';
import PortfolioTop from '../../components/portfolioTop';
import PortfolioGallery from '../../components/portfolioGallery';
import Footer from '../../components/footer';

export async function getStaticProps() {

    const res = await fetch(`${API_URL}/api/projects`);
    const data = await res.json();

    return {
        props: { projects : data }
    }
}

export default function Portfolio({projects}) {
    return (
        <>
            <Head>
                <title>Omar Roque | Portfolio</title>
            </Head>
            <div>
                <Header />
                <PortfolioTop />
                <PortfolioGallery projects={projects}/>
                <Footer />
            </div>
        </>
    )
}