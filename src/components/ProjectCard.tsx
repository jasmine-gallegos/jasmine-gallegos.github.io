import { Link } from "react-router-dom";
import type { Project } from "../content/projects";
import { AdvancedImage, AdvancedVideo } from "@cloudinary/react";
import { cld } from "../content/image-cloud";
import { fill } from "@cloudinary/url-gen/actions/resize";

interface ProjectProps {
    project: Project;
    index?: number;
}

const ProjectCard = ({ project }: ProjectProps) => {

    return (
        <>
            <Link
                to={`/${project.slug}`}
                className="
                "
            >
                <div className="
                w-[100%] 
                ">
                    {project.mainItemIsVideo ? 
                        <>
                            <AdvancedVideo cldVid={cld.video(project.mainItemDir)} loop={true} autoPlay={true} muted={true} playsInline={true} className=""/>
                            
                            {/* <video width="1120" height="960" autoPlay muted loop src={project.baseDir + project.mainItemDir}>
                                Your browser does not support the video tag.
                            </video> */}
                        </>
                    : 
                        <>
                        <AdvancedImage cldImg={cld.image(project.mainItemDir).resize(fill().aspectRatio("1.8"))} className="" />
                        {/* <img src={project.baseDir + project.mainItemDir}></img>  */}
                        </>
                    }

                    <p className="ml-2">
                        {project.title}
                    </p>
                </div>
            </Link>
        </>
    );
};

export default ProjectCard