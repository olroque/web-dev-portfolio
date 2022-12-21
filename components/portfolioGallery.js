import Image from "next/image";

export default function PortfolioGallery() {
    return (
        <div className="root">
            <section className="gallery-container">
                <div className="porfolio-item-container">
                    <div className="portfolio-item-title">
                        <h2>Photographer&#39;s App</h2>
                    </div>
                    <div className="portfolio-gallery-item-row">
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
                        <div className="portfolio-item-description">
                            <div>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ipsam provident nostrum neque incidunt. Suscipit consectetur cupiditate aut laboriosam expedita cumque, rem necessitatibus, eos non sint illum saepe repudiandae quisquam.
                                    Nihil reprehenderit necessitatibus hic accusamus ipsum similique assumenda. Temporibus cumque, officia eius quos, nihil vitae odio consectetur harum aliquid sequi rerum nisi tenetur earum accusantium fugit totam molestias minus aut!
                                </p>
                            </div>
                            <div className="project-link">
                                <a href="https://www.omarroquevisuals.com/" target={"blank"}>
                                    View Project
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}