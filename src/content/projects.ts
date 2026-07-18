import projectsJSON from "../assets/AllProjects.json"

const allProjectsList: Project[] = []
export default allProjectsList;



projectsJSON.filter(p => p.downloaded).map( project => {

    console.log(project)

    allProjectsList.push({
        slug: project.slug,
        title: project.title,
        genre: getGenre(project.genre),
        mainItemDir: project["main-item-dir"],
        mainItemIsVideo: project["main-item-is-video"],

        baseDir: "projects/" + project.genre + "/" + 
            (project["sub-folder (optional)"] ? project["sub-folder (optional)"] + "/" : "")
    });

    if (project.date) {
        allProjectsList.find(p => p.slug == project.slug).date = project.date.toString()
    }

    if (project.description) {
        allProjectsList.find(p => p.slug == project.slug).description = project.description
    }

    if (project.credits) {
        allProjectsList.find(p => p.slug == project.slug).credits = project.credits
    }

    if (project["extra-photos"]) {
        const extras = project["extra-photos"]?.split(",")
        allProjectsList.find(p => p.slug == project.slug).extraItemsDir = extras
    }
    
});



function getGenre(inputGenre: string): Genre {
    switch (inputGenre) {
        case "2d-motion-graphics": return "2d-motion-graphics"
        case "3d-motion-graphics": return "3d-motion-graphics"
        case "graphic-design": return "graphic-design"
        case "animation": return "animation"
        case "illustration": return "illustration"
        case "photography": return "photography"
        default: return "all"
    }
}



export type Genre = "all" | "2d-motion-graphics" | "3d-motion-graphics" | "graphic-design" | "animation" | "illustration" | "photography"

export interface Project {
  slug: string;
  title: string;
  date?: string; 
  description?: string;

  baseDir: string;

  genre: Genre;
  subFolder?: string;
  
  mainItemDir: string;
  mainItemIsVideo: boolean;
  
  extraItemsDir?: string[];
  
  credits?: string;
}


export const getProjectBySlug = (slug: string) =>
  allProjectsList.find((a) => a.slug === slug);