import Link from "next/link";
import Image from "next/image";

export default function Gallery() {
    return (
        <div className="root">
            <div className="gallery-wrapper">
                <section className="gallery-container">
                    <div className="gallery-row">
                        {/* <div className="gallery-item portrait-pic">
                            <Link href="/">
                                <Image src="/images/6.jpg" alt="picture of web developement project" width={1400}  height={900}/>
                            </Link>
                        </div> */}
                        <div className="gallery-item landscape-pic">
                            <Link href="/">
                                <Image src="/images/13.jpg" alt="picture of web developement project" width={1400}  height={900}/>
                            </Link>
                        </div>
                    </div>
                    <div className="gallery-row">
                        {/* <div className="gallery-item landscape-pic">
                            <Link href="/">
                                <Image src="/images/12.jpg" alt="picture of web developement project" width={1400}  height={900}/>
                            </Link>
                        </div> */}
                        <div className="gallery-item portrait-pic">
                            <Link href="/">
                                <Image src="/images/5.jpg" alt="picture of web developement project" width={1400}  height={900}/>
                            </Link>
                        </div>
                        <div className="gallery-item gallery-item-text">
                            <p>
                                Mobile Responsive Websites
                            </p>
                        </div>
                    </div>
                    <div className="gallery-row">
                        <div className="gallery-item gallery-item-text">
                            <p>
                                Modern Design
                            </p>
                        </div>
                        <div className="gallery-item portrait-pic">
                            <Link href="/">
                                <Image src="/images/7.jpg" alt="picture of web developement project" width={1400}  height={900}/>
                            </Link>
                        </div>
                        {/* <div className="gallery-item landscape-pic">
                            <Link href="/">
                                <Image src="/images/11.jpg" alt="picture of web developement project" width={1400}  height={900}/>
                            </Link>
                        </div> */}
                    </div>
                </section>
            </div>
        </div>
    )
}