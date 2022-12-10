import Link from "next/link";
import { useRouter } from "next/router";

import Header from '../../components/header';
import Footer from '../../components/footer';

export default function() {
    const router = useRouter();

    console.log(router);

    return (
        <div className="root">
            <Header />
            <h1>Slug:</h1>
            <h2>{router.query.slug}</h2>
            <Footer />
        </div>
    )
}