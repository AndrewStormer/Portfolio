import { ProjectXSkillDto } from "../pages/Projects";

const github = require('../github_logo.png');

export default function Project({project}) {
  const video = require(`../${project?.video}`)

  return (
    <div className="bg-blend-lighten">
      <div>
        <h1 className='px-4 pt-8 text-2xl text-bgpurple-50 font-semibold font-serif'>{project?.name}</h1>
        <h2 className='px-4 text-lg font-serif opacity-80'>{project?.status}</h2>
      </div>
      <div className='p-4 md:p-8'>
        <img src={video} alt={'this is a picture of a project'} className='rounded-2xl mx-auto' />
      </div>
      <p className="px-4 text-content indent-8 text-pretty text-lg text-bgpurple-10/60">
        {project?.description}
        <br />
        <ul className='pl-4 text-sm list-decimal'>
          {project?.references?.map((r) => (
            <li><a className='hover:text-bgpurple-10/80' href={r.link} >{r.text}</a></li>
          ))}
        </ul>
      </p>
      <div className='px-4 pb-4 md:pb-12 mx-4 border-b border-opacity-40 border-bgpurple-100'>
        <h4 className="px-4 pt-8 text-lg text-bgpurple-5 font-semibold font-serif">Skills Used/Gained From This Project:</h4>
        <div className='px-4 text-content text-pretty text-lg text-bgpurple-10/80'>
          {project?.skills?.map((s: ProjectXSkillDto) => (
            <li>
              {s.skill_id.skill}
            </li>
            ))}
        </div>
      </div>
    </div>
  )
}
