import { useParams } from "react-router-dom";
import { getProjectBySlug, type Project } from "../content/projects";
import { AdvancedImage, AdvancedVideo } from "@cloudinary/react";
import { cld } from "../content/image-cloud";
import allPhotographsList from "../content/photographs";

function ProjectInfoPage() {

    const { slug } = useParams<{ slug: string }>();
    const project = slug ? getProjectBySlug(slug) : undefined;

    if (project) {
        return (
            <>
                <section className="
                w-full
                h-full
                ">
                    <div className="
                    flex
                    flex-col
                    m-10
                    ">

                        <div className="mb-8">
                            <h1 className="
                            md:text-7xl
                            text-5xl
                            ">{project.title}</h1>
                            <p className="text-5xl">{project.date}</p>
                        </div>
                        


                        {project.genre === "photography" || project.genre === "graphic-design" ? 
                            <LooseItemsSection project={project}/>
                        :
                            <CentralItemSection project={project} />
                        }


                        {project.description ? 
                            <div className="
                            mt-8
                            ">
                                <hr  className="mb-4"/>

                                <div className="flex items-center lg:flex-row flex-col ">
                                    <h1 className="m-4">Description</h1>
                                    <p>{project.description}</p>
                                </div>
                            </div>
                        :
                        <></>
                        }

                        {project.credits ? 
                            <div className="
                            mt-8
                            ">
                                <hr  className="mb-4"/>

                                <div className="flex items-center lg:flex-row flex-col ">
                                    <h1 className="m-4">Credits</h1>
                                    <p>{project.credits}</p>
                                </div>
                            </div>
                        :
                        <></>
                        }




                    </div>
                </section>
                
            </>
        );
    }
}

export default ProjectInfoPage;


const CentralItemSection = ({ project }: { project: Project }) => {

    return (
        <>
            <div className="self-center flex">
                {project.mainItemIsVideo ?                     
                    // video project
                    <div className="">
                        <AdvancedVideo cldVid={cld.video(project.slug === "premiere-film-festival" 
                            ? "3dmg_Premiere_Film_Festival_Animation" : project.mainItemDir)} 
                            controls={true} autoPlay={true} 
                            className="
                                md:h-160
                            "/>
                    </div>
                : 
                    // image project
                    <div className="">
                        <AdvancedImage cldImg={cld.image(project.mainItemDir)} 
                        className="
                            md:h-160
                        "/>
                    </div>
                }
            </div>
            
            {project.extraItemsDir ? 
                <div className="
                mt-8
                h-70
                
                flex
                content-center 

                overflow-scroll
                ">
                    {project.extraItemsDir.flatMap( (a: string) => (
                        <>
                            {(a.includes("Video")) ? 
                                <>
                                    <AdvancedVideo cldVid={cld.video(a)} controls={true} className="m-4"/>
                                </> 
                            : 
                                <>
                                    <AdvancedImage cldImg={cld.image(a)} className="m-4" />
                                </>
                            }
                            
                        </>
                    ))}
                </div>
            :
                <></>
            }
        </>
    );
}


const LooseItemsSection = ({ project }: { project: Project }) => {

    if (project.genre === "graphic-design") {
        return (
            <>
                {project.extraItemsDir ? 
                    <div className="flex flex-wrap justify-center">
                        {project.extraItemsDir.flatMap( (a: string) => (
                            <div className="
                                w-160
                                m-4
                            ">
                                <AdvancedImage cldImg={cld.image(a)} className="" />
                            </div>
                        ))}
                    </div>
                :
                <></>
                }
            </>
        );
    } else {
        //.filter((p) => p.category === project.subFolder)
        return (
            <div className="flex flex-wrap justify-center">
                {allPhotographsList.filter((p) => p.category === project.subFolder).flatMap((pt) => (
                    
                    <div className="
                                w-160
                                m-4
                            ">
                        {/* <p>{pt.fileName}</p> */}
                        <AdvancedImage cldImg={cld.image(pt.fileName)} className="" />
                    </div>
                ))} 
            </div>
        );
    }

    
}