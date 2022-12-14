import Link from "next/link";
import Image from "next/image";

export default function Gallery() {
    return (
        <div className="root">
            <div className="gallery-wrapper">
                <section className="gallery-container">
                    <div className="gallery-row">
                        <div className="gallery-item landscape-pic homepage-hero-img">
                            <Image src="/images/26.jpg" alt="picture of web developement project" width={1400}  height={900}/>
                        </div>
                    </div>
                    <div className="gallery-row">
                        <div className="gallery-item portrait-pic">
                            <Image src="/images/28.jpg" alt="picture of web developement project" width={1400}  height={900}/>
                        </div>
                        <div className="border-line-main-gallery"></div>
                        <div className="gallery-item gallery-item-text">
                            <p>
                                Modern Design
                            </p>
                        </div>
                    </div>
                    <div className="gallery-row main-gallery-col-reverse">
                        <div className="gallery-item gallery-item-text">
                            <p>
                                Responsive Websites
                            </p>
                        </div>
                        <div className="border-line-main-gallery"></div>
                        <div className="gallery-item portrait-pic">
                            <Image src="/images/29.jpg" alt="picture of web developement project" width={1400}  height={900}/>
                        </div>
                    </div>
                    <div className="gallery-row">
                        <div className="gallery-item portrait-pic">
                            <Image src="/images/27.jpg" alt="picture of web developement project" width={1400}  height={900}/>
                        </div>
                        <div className="border-line-main-gallery"></div>
                        <div className="gallery-item gallery-item-text">
                            <p>
                                Smooth User Experience 
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}