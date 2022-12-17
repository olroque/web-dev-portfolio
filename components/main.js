import Link from "next/link";

export default function Main() {
    return (
        <div className="root">
            <section className="name-banner-container">
                <div>
                    <h1 className="name-banner">OMAR ROQUE</h1>
                </div>
            </section>
            <section className="picture-and-job-title">
                <div className="picture-container">
                    <img src="/images/13.jpg" alt="Picture of Omar" className="creator-pic" />
                </div>
                <div className="job-title-container">
                    <p className="job-title">
                        UX/UI Designer &amp; <br/> Web Developer
                    </p>
                </div>
            </section>
            <section className="creator-description-container">
                <div>
                    <h4 className="creator-description">
                        DOLD means &#39;hidden&#39; is Swedish.
                        Why hidden, you ask? Our aim is to uncover the simple, strong, undeniable truth of each brand.
                        To find it, we have to ask the right questions, research, rethink, re-everything. This is the only way to ensure that our clients get that simple, powerful visual solution theyve been looking for.
                    </h4>
                </div>
            </section>
            <section className="all-projects-link">
                <Link href="/portfolio">
                    All Projects
                </Link>
            </section>
        </div>
            
    )
}