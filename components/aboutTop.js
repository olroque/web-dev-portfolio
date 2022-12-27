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
                        I&apos;m Omar, a web developer with a flair for creating beautiful and user&#45;friendly websites. My skills in technologies like HTML, CSS, JavaScript, and various frameworks give me the tools to bring your project to life in the most stylish and innovative way possible.
                        <br />
                        <br />
                        I hope you enjoy exploring my website and portfolio, and I&#39;m excited to bring my skills and creativity to your next project. Let&#39;s make something amazing together!
                    </p>
                </div>
            </div>
            <div className="about-image-container">
                <div>
                    <Image src="/images/32.jpg" alt="Portfolio Image" 
                        width={1900}
                        height={900} />
                </div>
            </div>
            <div className="about-services-container">
                <div className="services-name">
                    <h1>
                        Services
                    </h1>
                </div>
                <div className="services-items-container">
                    <div className="service-item">
                        <div className="service-item-name">
                            <h3>Front End</h3>
                        </div>
                        <div className="service-item-description">
                            <p>
                                Solid foundation in front end technologies including HTML, CSS, JavaScript, React, and NextJS. These skills enable me to create visually appealing and user&#45;friendly web applications, making me a valuable asset to any project.
                            </p>
                        </div>
                    </div>
                    <div className="service-item">
                        <div className="service-item-name">
                            <h3>Back End</h3>
                        </div>
                        <div className="service-item-description">
                            <p>
                                Expertise in languages including Python, C#, and C++. My skills allow me to create efficient systems for web applications. I have strong problem-solving abilities and a talent for critical and creative thinking. I am constantly seeking new learning opportunities to grow as a developer.
                            </p>
                        </div>
                    </div>
                    <div className="service-item">
                        <div className="service-item-name">
                            <h3>Databases</h3>
                        </div>
                        <div className="service-item-description">
                            <p>
                                Experience in databases such as Postgres, MongoDB, SQLite, and SQL, I have a strong understanding of how to design and maintain efficient and reliable data storage systems.
                            </p>
                        </div>
                    </div>
                    <div className="service-item">
                        <div className="service-item-name">
                            <h3>UI/UX</h3>
                        </div>
                        <div className="service-item-description">
                            <p>
                                As a connoisseur of UI and UX design principles, I am able to create intuitive and visually appealing user interfaces that deliver a seamless and enjoyable user experience. I am passionate about creating engaging and intuitive interfaces and am always looking for ways to improve the user experience.
                            </p>
                        </div>
                    </div>
                    <div className="service-item">
                        <div className="service-item-name">
                            <h3>Design</h3>
                        </div>
                        <div className="service-item-description">
                            <p>
                                A developer with a strong background in web design and graphic design. I am skilled in using design tools such as Adobe Creative Suite. I have a keen eye for aesthetics and am able to incorporate design elements that effectively communicate the desired message and brand identity. I am passionate about creating engaging and effective designs.
                            </p>
                        </div>
                    </div>
                    <div className="service-item">
                        <div className="service-item-name">
                            <h3>Photography</h3>
                        </div>
                        <div className="service-item-description">
                            <p>
                                My photography skills also give me an understanding of lighting and color theory, which I apply to my web design work to create visually striking and effective designs. I am passionate about creating web experiences that are both functional and aesthetically pleasing.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}