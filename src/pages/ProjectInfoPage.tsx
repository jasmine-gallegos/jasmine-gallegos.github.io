import { useParams } from "react-router-dom";
import { getProjectBySlug } from "../content/projects";
import { AdvancedImage, AdvancedVideo } from "@cloudinary/react";
import { cld } from "../content/image-cloud";
import { fill } from "@cloudinary/url-gen/actions/resize";

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
                            text-7xl
                            ">{project.title}</h1>
                            <p className="text-5xl">{project.date}</p>
                        </div>
                        


                        {project.genre === "photography" ? 
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


const CentralItemSection = ({project}) => {

    return (
        <>
            <div>
                {project.mainItemIsVideo ?                     
                    // video project
                    <>
                        <AdvancedVideo cldVid={cld.video(project.mainItemDir)} controls={true} autoPlay={true} className=""/>
                    </>
                : 
                    // image project
                    <>
                        <AdvancedImage cldImg={cld.image(project.mainItemDir).resize(fill().aspectRatio("1.8"))} className="" />
                    </>
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
                            {a.includes(".mp4") ? 
                                <>
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


const LooseItemsSection = ({project}) => {

    return (
        <>
            {project.title}
        </>
    );
}

// {project.extraItemsDir.flatMap( (e) => {
//                 <img src={e} />
//             })}