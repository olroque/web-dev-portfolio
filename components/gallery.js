import Link from "next/link";
import Image from "next/image";

export default function Gallery() {
    return (
        <div className="root">
            <div className="gallery-wrapper">
                <section className="gallery-container">
                    <div className="gallery-row">
                        <div className="gallery-item landscape-pic homepage-hero-img">
                            <Link href="/">
                                <Image src="/images/26.jpg" alt="picture of web developement project" width={1400}  height={900}/>
                            </Link>
                        </div>
                    </div>
                    <div className="gallery-row">
                        <div className="gallery-item portrait-pic">
                            <Link href="/">
                                <Image src="/images/28.jpg" alt="picture of web developement project" width={1400}  height={900}/>
                            </Link>
                        </div>
                        <div className="gallery-item gallery-item-text">
                            <p>
                                Mobile Responsive Websites
                            </p>
                        </div>
                    </div>
                    <div className="gallery-row main-gallery-col-reverse">
                        <div className="gallery-item gallery-item-text">
                            <p>
                                Modern Design
                            </p>
                        </div>
                        <div className="gallery-item portrait-pic">
                            <Link href="/">
                                <Image src="/images/29.jpg" alt="picture of web developement project" width={1400}  height={900}/>
                            </Link>
                        </div>
                    </div>
                    <div className="gallery-row">
                        <div className="gallery-item portrait-pic">
                            <Link href="/">
                                <Image src="/images/27.jpg" alt="picture of web developement project" width={1400}  height={900}/>
                            </Link>
                        </div>
                        <div className="gallery-item gallery-item-text">
                            <p>
                                Mobile Responsive Websites
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}