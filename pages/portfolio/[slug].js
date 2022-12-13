import { API_URL } from "../../config";

import Link from "next/link";
import Header from '../../components/header';
import PortfolioDetails from "../../components/portfolioDetails";
import Footer from '../../components/footer';

export async function getStaticPaths() {
    const res = await fetch(`${API_URL}/api/projects`);
    const data = await res.json();

    const paths = data.map(project => ({
            params: {slug: project.slug}
    }))

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params:{slug}}) {
    const res = await fetch(`${API_URL}/api/projects/${slug}`);
    const data = await res.json();

    return {
        props: { project : data[0], },
        revalidate: 1,
    }
}

export default function({ project }) {
    console.log(project)
    return (
        <div className="root">
            <Header />
            <PortfolioDetails key={project.id} project={project} />
            <Footer />
        </div>
    )
}