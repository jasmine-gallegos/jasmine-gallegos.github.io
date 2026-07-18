import photographsJSON from "../assets/PhotographyProjects.json"

interface Photograph {
    title: string;
    date?: string;
    description?: string;
    category: string;
    fileName: string;
}

const allPhotographsList: Photograph[] = [];

photographsJSON.map( (p) => {
    allPhotographsList.push ({
        title: p.Title,
        category: p["Photography Category"],
        fileName: p["file-dir"]
    })


})