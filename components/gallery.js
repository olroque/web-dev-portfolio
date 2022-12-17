import Link from "next/link";
import Image from "next/image";

export default function Gallery() {
    return (
        <div className="root">
            <section className="gallery-container">
                <div className="gallery-row">
                    <div className="gallery-item portrait-pic">
                        <Link href="/">
                            <Image src="/images/5.jpg" alt="picture of web developement project" width={1400}  height={900}/>
                        </Link>
                    </div>
                    <div className="gallery-item landscape-pic">
                        <Link href="/">
                            <Image src="/images/2.jpg" alt="picture of web developement project" width={1400}  height={900}/>
                        </Link>
                    </div>
                </div>
                <div className="gallery-row">
                    <div className="gallery-item landscape-pic">
                        <Link href="/">
                            <Image src="/images/3.jpg" alt="picture of web developement project" width={1400}  height={900}/>
                        </Link>
                    </div>
                    <div className="gallery-item portrait-pic">
                        <Link href="/">
                            <Image src="/images/8.jpg" alt="picture of web developement project" width={1400}  height={900}/>
                        </Link>
                    </div>
                </div>
                <div className="gallery-row">
                    <div className="gallery-item portrait-pic">
                        <Link href="/">
                            <Image src="/images/9.jpg" alt="picture of web developement project" width={1400}  height={900}/>
                        </Link>
                    </div>
                    <div className="gallery-item landscape-pic">
                        <Link href="/">
                            <Image src="/images/1.jpg" alt="picture of web developement project" width={1400}  height={900}/>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}