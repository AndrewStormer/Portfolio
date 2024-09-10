import { useState, useEffect } from "react";

interface Skill {
    id: number,
    skill: string,
    confidence: number
}

export default function Skills() {
  const [data, setData] = useState();  

  useEffect(() => {
      fetch(`http://localhost:3001/skill`)
        .then(response => response.json())
        .then(json => setData(json))
        .catch(error => console.error(error))
    }, [])

  return (
    <div className='skillsContainer'>
          Technical Skills: <br />
          <div className='skills'>
              {(data as [Skill])
                ?.map(d => d.skill)
                .slice(0 , ((data as [Skill]).length > 15) ? 15 : undefined)
                .join(' - ')}
            </div>
          </div>
  )
}
