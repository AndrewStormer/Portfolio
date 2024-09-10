import { ProjectXSkillDto } from "../pages/Projects";

const github = require('../github_logo.png');

export default function Project({project}) {
  const video = require(`../${project?.video}`)

  return (
    <div className="projectContainer">
      <div className="projectName">
        <h1>{project?.name}</h1>
        {project?.status}
      </div>
      <div className="githubContainer">
        <a href={project?.github}>
          <img src={github} alt={'github'}></img>
        </a>
      </div>
      <p>
        {project?.description}
        <br />
        {project?.references?.map((r) => (
          <li><a href={r.link} >{r.text}</a></li>
        ))}
      </p>
      <div className='projectSkillsContainer'>
        <h4>Skills used/gained during this project:</h4>
        <div className='projectSkillsGridContainer'>
          {project?.skills?.map((s: ProjectXSkillDto) => (
            <li>
              {s.skill_id.skill}
            </li>
            ))}
        </div>
      </div>
      <div className='projectVideoContainer'>
        <img src={video} alt={'this is a picture of a project'} />
      </div>
    </div>
  )
}
