import Link from "next/link";
import Image from "next/image";

export default function Gallery() {
    return (
        <div className="root">
            <section className="gallery-container">
                <div className="gallery-row">
                    <div className="gallery-item portrait-pic">
                        <Link href="/">
                            <Image src="/images/6.jpg" alt="picture of web developement project" width={1400}  height={900}/>
                        </Link>
                    </div>
                    <div className="gallery-item landscape-pic">
                        <Link href="/">
                            <Image src="/images/13.jpg" alt="picture of web developement project" width={1400}  height={900}/>
                        </Link>
                    </div>
                </div>
                <div className="gallery-row">
                    <div className="gallery-item landscape-pic">
                        <Link href="/">
                            <Image src="/images/12.jpg" alt="picture of web developement project" width={1400}  height={900}/>
                        </Link>
                    </div>
                    <div className="gallery-item portrait-pic">
                        <Link href="/">
                            <Image src="/images/5.jpg" alt="picture of web developement project" width={1400}  height={900}/>
                        </Link>
                    </div>
                </div>
                <div className="gallery-row">
                    <div className="gallery-item portrait-pic">
                        <Link href="/">
                            <Image src="/images/7.jpg" alt="picture of web developement project" width={1400}  height={900}/>
                        </Link>
                    </div>
                    <div className="gallery-item landscape-pic">
                        <Link href="/">
                            <Image src="/images/11.jpg" alt="picture of web developement project" width={1400}  height={900}/>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}