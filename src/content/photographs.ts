import photographsJSON from "../assets/PhotographyProjects.json"

export interface Photograph {
    title: string;
    date?: string;
    description?: string;
    category: string;
    fileName: string;
}

const allPhotographsList: Photograph[] = [];
export default allPhotographsList;

photographsJSON.map( (p) => {
    allPhotographsList.push ({
        title: p.Title,
        category: p["Photography Category"],
        fileName: p["file-dir"]
    })
})