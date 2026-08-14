import { Link } from "react-router-dom";
import type { Project } from "../content/projects";
import { AdvancedImage, AdvancedVideo } from "@cloudinary/react";
import { cld } from "../content/image-cloud";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";

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
                        </>
                    : 
                        <>
                        <AdvancedImage cldImg={
                            cld.image(project.mainItemDir)
                            .resize(fill().aspectRatio("1.8").gravity(autoGravity()))
                            } className="" />
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