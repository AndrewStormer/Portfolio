import { useState, useEffect } from "react";
import Project from "../components/Project";


export interface ReferenceDto {
    id: number,
    text: string,
    link: string
}

export interface SkillDto {
    id: number,
    skill: string,
    confidence: number
}

export interface ProjectXSkillDto {
    id: number,
    project_id: number,
    skill_id: SkillDto
}

export interface ProjectDto {
    id: number,
    name: string,
    description: string,
    status: string,
    github?: string,
    video?: string,
    skills: ProjectXSkillDto[],
    references: ReferenceDto[]
  }
  
  export default function Projects() {
      const [data, setData] = useState()
      const [currentProject, setCurrentProject] = useState(0);

    
    useEffect(() => {
      fetch(`http://localhost:3001/project`)
        .then(response => response.json())
        .then(json => setData(json))
        .catch(error => console.error(error))
    }, [])

    const projects: ProjectDto[] = (data as [ProjectDto]);
    console.log(projects);

    if (data == undefined || data == null) {
        return (
            <div>

            </div>
        )
    }
    return (  
        <div className="projectButtonGridContainer">
            <h1 id="section2" className='pt-24 md:pt-40 px-4 m-auto text-4xl text-bgpurple-10 font-semibold font-serif text-center'>Projects</h1>

            <div>
                { projects?.map((project) => (
                    <div className="pb-4">
                        <Project project={project} />
                    </div>
                ))}
            </div>
        </div>
    )
}