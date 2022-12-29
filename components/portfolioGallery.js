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
                                <Image src="/images/29.jpg" alt="picture of web developement project"
                                    width={700}
                                    height={700} />
                            </a>
                        </div>
                        <div className="portfolio-item-description">
                            <div>
                                <p>
                                A photography portfolio website, where I showcase my best work and share my passion for photography with the world. Built from scratch using HTML, CSS, and JavaScript, my website is designed to be visually striking and easy to navigate, so you can easily browse through my portfolio and learn more about my work. 
                                <br/>
                                <br/>
                                On my website, you&#39;ll find a variety of my photographs, organized into different galleries by theme, style, and subject matter. I&#39;ve also included information about myself and my approach to photography, as well as links to my social media profiles and contact information.
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