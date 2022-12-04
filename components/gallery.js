import Link from "next/link"

export default function Gallery() {
    return (
        <div className="root">
            <section className="gallery-container">
                <div className="gallery-row">
                    <div className="gallery-item portrait-pic">
                        {/* <Link href="/"> */}
                            <img src="/images/5.jpg" alt="picture of web developement project" />
                        {/* </Link> */}
                    </div>
                    <div className="gallery-item landscape-pic">
                        {/* <Link href="/"> */}
                            <img src="/images/2.jpg" alt="picture of web developement project" />
                        {/* </Link> */}
                    </div>
                </div>
                <div className="gallery-row">
                    <div className="gallery-item landscape-pic">
                        {/* <Link href="/"> */}
                            <img src="/images/3.jpg" alt="picture of web developement project" />
                        {/* </Link> */}
                    </div>
                    <div className="gallery-item portrait-pic">
                        {/* <Link href="/"> */}
                            <img src="/images/8.jpg" alt="picture of web developement project" />
                        {/* </Link> */}
                    </div>
                </div>
                <div className="gallery-row">
                    <div className="gallery-item portrait-pic">
                        {/* <Link href="/"> */}
                            <img src="/images/9.jpg" alt="picture of web developement project" />
                        {/* </Link> */}
                    </div>
                    <div className="gallery-item landscape-pic">
                        {/* <Link href="/"> */}
                            <img src="/images/1.jpg" alt="picture of web developement project" />
                        {/* </Link> */}
                    </div>
                </div>
            </section>
        </div>
    )
}