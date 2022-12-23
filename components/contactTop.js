import Image from "next/image";

export default function ContactTop() {
    return (
        <div className="root">
            <div className="contact-page-container">
                <div className="contact-page-name-container">
                    <div>
                        <h1>Contact Me</h1>
                    </div>
                </div>
                <div className="contact-page-info-container">
                    <div className="contact-phone contact-item">
                        <p className="contact-info-name">Phone:</p>
                        <p className="contact-info-item">252-665-3363</p>
                    </div>
                    <div className="contact-location contact-item">
                        <p className="contact-info-name">Location:</p>
                        <p className="contact-info-item">Chapel Hill</p>
                        <p className="contact-info-item">North Carolina</p>
                    </div>
                    <div className="contact-email contact-item">
                        <p className="contact-info-name">Email:</p>
                        <p className="contact-info-item">olroque@yahoo.com</p>
                    </div>
                </div>
                <div className="contact-image-container">
                    <div>
                        <Image src="/images/31.jpg" alt="Portfolio Image" width={1900} height={1000} />
                    </div>
                </div>
            </div>
        </div>
    )
}