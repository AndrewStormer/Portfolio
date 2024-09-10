import { useState, useEffect } from "react";
import Project from "../components/Project";
import Button from 'react-bootstrap/Button';


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

    const handleLeftClick = (e) => {
        e.preventDefault();
        if (currentProject == 0) {
            setCurrentProject(projects.length - 1);
        } else {
            setCurrentProject(currentProject - 1);
        }    
    }

    const handleRightClick = (e) => {
        e.preventDefault();
        if (currentProject == projects.length - 1) {
            setCurrentProject(0);
        } else {
            setCurrentProject(currentProject + 1);
        }    
    }

    if (data == undefined || data == null) {
        return (
            <div>

            </div>
        )
    }
    return (  
        <div className="projectButtonGridContainer">
            <div className='leftProjectButtonContainer'>
                <Button 
                  variant="outline-info" 
                  type="button" 
                  onClick={handleLeftClick}
                  className='projectButton' 
                >{'<'}</Button>
            </div>
            <div>
                <div className="projectContainter">
                    <Project project={projects?.[currentProject]} />
                </div>
            </div>
            <div className='leftProjectButtonContainer'>
                <Button 
                variant="outline-info" 
                type="button" 
                onClick={handleRightClick}
                className='projectButton' 
                >{'>'}</Button>
            </div>

        </div>
    )
}