import Image from "next/image";

export default function PortfolioGallery() {
    return (
        <div className="root">
            <section className="gallery-container">
                <div className="portfolio-gallery-row">
                    <div className="portfolio-item">
                        <a href="https://www.omarroquevisuals.com/" target={"blank"}>
                            <Image src="/images/5.jpg" alt="picture of web developement project"
                                width={700}
                                height={700} />
                            {/* <div className="overlay">
                                <span>
                                    Project Number 1
                                </span>
                            </div> */}
                        </a>
                    </div>
                    {/* <div className="portfolio-item">
                        <Link href="/">
                            <img src="/images/12.jpg" alt="picture of web developement project" />
                            <div className="overlay">
                                <span>
                                    Project Number 2
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="portfolio-gallery-row">
                    <div className="portfolio-item">
                        <Link href="/">
                            <img src="/images/10.jpg" alt="picture of web developement project" />
                            <div className="overlay">
                                <span>
                                    Project Number 3
                                </span>
                            </div>
                        </Link>
                    </div>
                    <div className="portfolio-item">
                        <Link href="/">
                            <img src="/images/11.jpg" alt="picture of web developement project" />
                            <div className="overlay">
                                <span>
                                    Project Number 4
                                </span>
                            </div>
                        </Link>
                    </div> */}
                </div>
            </section>
        </div>
    )
}