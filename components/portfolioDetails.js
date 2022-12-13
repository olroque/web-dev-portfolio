import Image from "next/image";

export default function({ project }) {
    return (
        <div className="root">
            <div className="project-banner-img">
                <a href={project.link} target="blank">
                    <Image src={project.image1} alt="Portfolio Image"
                        width={1600} 
                        height={900} 
                        />
                </a>
            </div>
            <div className="project-description">
                <h4>
                    <span>
                        This is where the project description goes. Give an overview or go in depth - what it's all about, what inspired you, how you created it, or anything else you'd like visitors to know. To add Project descriptions, go to Manage Projects.
                    </span>
                </h4>
            </div>
            <div className="project-bottom-img">
                <div>
                    <a href={project.link} target="blank">
                        <Image src={project.image2} alt="Portfolio Image"
                            width={836}
                            height={1182}
                            />
                    </a>
                </div>
            </div>
        </div>
    )
}