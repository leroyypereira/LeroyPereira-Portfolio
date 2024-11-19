import React from 'react'
import {PROJECTS} from "../constants"

const Projects = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <h2 className="my-20 text-center text-4xl">Projects</h2>
        <div>
            {PROJECTS.map((project, index) => (
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                    <div  className="w-full lg:w-1/4">
                        <img 
                        src={project.image} 
                        width={150}
                        height={150}
                        alt={project.title}
                        className="mb-6 rounded" />
                    </div>
                    <div className="w-full max-w-xl lg:w-3/4">
                        <h5 className="mb-2 font-semibold">{project.title}</h5>
                        <p>{project.description}</p>
                    </div>
                    
                </div>
            ))}
        </div>
    </div>
  )
}

export default Projects