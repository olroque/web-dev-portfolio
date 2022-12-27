import Link from "next/link";
import Image from "next/image";

export default function Main() {
    return (
        <div className="root">
            <section className="name-banner-container">
                <div>
                    <h1 className="name-banner">OMAR ROQUE</h1>
                </div>
            </section>
            <section className="picture-and-job-title">
                <div className="picture-container">
                    <Image src="/images/15.jpg" alt="Picture of Omar" className="creator-pic" width={800} height={600}/>
                </div>
                <div className="job-title-container">
                    <p className="job-title">
                        Full Stack Developer &amp; <br/> Web Designer
                    </p>
                </div>
            </section>
            <section className="creator-description-container">
                <div>
                    <h4 className="creator-description">
                    Welcome my friend! I&#39;m glad you&#39;re here, and I hope you enjoy taking a look at some of my work. This is a collection of projects that I am particularly proud of, and I hope it gives you a sense of my skills, style, and passions. 
                    <br/>
                    <br/>
                    Whether you&#39;re here to learn more about me and my work, or just to browse around and see what I&#39;ve been up to, I&#39;m happy to have you. 
                    </h4>
                </div>
            </section>
            <section className="all-projects-link">
                <Link href="/portfolio">
                    All Projects
                </Link>
            </section>
        </div>
            
    )
}