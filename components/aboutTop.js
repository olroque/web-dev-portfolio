import Image from "next/image";

export default function AboutTop() {
    return (
        <div className="root">
            <div className="about-top-container">
                <div className="about-name">
                    <h1>
                        ABOUT
                    </h1>
                </div>
                <div className="about-info">
                    <p>
                        This is DOLD. That sweet spot between smart and foolish, fun and fine, monochromatic and multicolor, flawless design and casual beauty. 
                        <br />
                        <br />
                        Founded by Aisha Blake, DOLD specializes in
                        <br />
                        a wide range of project scales. From the private to the public sectors, from corporates to SMBs, were ready to take on any challenge.
                    </p>
                </div>
            </div>
            <div className="about-image-container">
                <div>
                    <Image src="/images/2.jpg" alt="Portfolio Image"
                        width={1600}
                        height={930}
                    />
                </div>
            </div>
            <div className="about-services-container">

            </div>
        </div>
    )
}