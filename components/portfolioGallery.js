import Link from "next/link";

export default function() {
    return (
        <div className="root">
            <section className="gallery-container">
                <div className="portfolio-gallery-row">
                    <div className="portfolio-item">
                        {/* <Link href="/">
                            <img src="/images/5.jpg" alt="picture of web developement project" />
                        </Link> */}
                    </div>
                    <div className="portfolio-item">
                        {/* <Link href="/">
                            <img src="/images/12.jpg" alt="picture of web developement project" />
                        </Link> */}
                    </div>
                </div>
                <div className="portfolio-gallery-row">
                    <div className="portfolio-item">
                        {/* <Link href="/">
                            <img src="/images/10.jpg" alt="picture of web developement project" />
                        </Link> */}
                    </div>
                    <div className="portfolio-item">
                        {/* <Link href="/">
                            <img src="/images/11.jpg" alt="picture of web developement project" />
                        </Link> */}
                    </div>
                </div>
            </section>
        </div>
    )
}