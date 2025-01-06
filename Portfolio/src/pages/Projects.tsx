import { useState, useEffect } from "react";
import Project from "../components/Project";

import { get } from 'aws-amplify/api';
import { DocumentType } from "@aws-amplify/core/internals/utils";

async function getProjects() {
  try {
    const restOperation = get({ 
      apiName: 'projectApi',
      path: '/project' 
    });
    const {body} = await restOperation.response;
    console.log('GET call succeeded: ', body);
    return await body.json();
  } catch (e) {
    console.log('GET call failed: ', JSON.parse(e.response.body));
  }
}


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
    const [data, setData] = useState<DocumentType>();  

    useEffect(() => {
        getProjects()
          .then(json => setData(json))
          .catch(error => console.error(error))
      }, [])

    const projects: ProjectDto[] = ((data as any) as [ProjectDto]);
    console.log(projects);

    if (data == undefined || data == null) {
        return (
            <div>

            </div>
        )
    }
    return (  
        <div>
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