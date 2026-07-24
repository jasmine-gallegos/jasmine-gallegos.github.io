import { useState } from "react"
import "../App.css"
import ProjectCard from "../components/ProjectCard"
import { type Category } from "../content/projects"
import allProjectsList from "../content/projects"


function HomePage() {

  const [currentCategory, setCurrentCategory] = useState(0);

  const categories: {genre: Category, label: string, index: number}[] = [
    { genre: "all", label: "All", index: 0 },
    { genre: "animation", label: "Animation", index: 1 },
    { genre: "2d-motion-graphics", label: "2D Motion Graphics", index: 2 },
    { genre: "3d-motion-graphics", label: "3D Motion Graphics", index: 3 },
    { genre: "graphic-design", label: "Graphic Design", index: 4 },
    { genre: "illustration", label: "Illustration", index: 5 },
    { genre: "photography", label: "Photography", index: 6 },
  ]


  return (
    <>
      <section id="center" className="
      w-full h-full 
      ">

        <div className="flex flex-wrap mb-4">
          {categories.map((category) => 
            <button 
            key={category.index}
            className={`category-button ${currentCategory === category.index ? 'active' : ''}`}
            onClick={() => setCurrentCategory(category.index)}
            ><h1>{category.label}</h1></button>
          )}
        </div>

        <div className="
          flex justify-items-center
          grid gap-10
          sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
          mr-14 ml-14
          ">
            {allProjectsList.filter( (proj) => proj.category === categories[currentCategory].genre || currentCategory === 0 ).map((p, i) => (
              <ProjectCard project={p} index={i}/>
            ))}
        </div>

      </section>
    </>
  )
}

export default HomePage
