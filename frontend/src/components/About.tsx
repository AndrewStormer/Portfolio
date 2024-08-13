import React, { useEffect, useState } from 'react'
const headshot = require('../headshot.jpg');

interface Skill {
    id: number,
    skill: string,
    confidence: number
}

export default function About() {
    const [data, setData] = useState();

    useEffect(() => {
        fetch(`http://localhost:3001/skill`)
          .then(response => response.json())
          .then(json => setData(json))
          .catch(error => console.error(error))
      }, [])

    const paragraph = "I'm Andrew Stormer, a senior at The University of Missouri majoring in Computer Science and minoring in Mathematics."
    + " I am familiar with C, Typescript & Javascript, Python and Assembly languages, as well as SQL and Mongoose querying languages. I excel in backend development"
    + ", working as a backend developer during my software engineering internship at Lumeris. From that experience I am familiar with the process of standing up a "
    + "corporate scale API using NestJS with Typescript that manage AWS resources with IAC and the process of deploying said API. I have additional interests in "
    + "low-level systems programming and machine learning engineering with strong backgrounds in operating systems and linear algebra/statistics respectively."

    if (data == null) {
      return (
        <div className='aboutContainer'>
          <h2>About Me:</h2>
          <div className='aboutMeContainer'>
          <img src={headshot} width={110} alt={'professional headshot'}></img>
            <p>
              {paragraph}
            </p>
          </div>
      
          <div className='skillsContainer'>
            Technical Skills: <br />
          </div>
        </div>
      );
    } else {
      return (
        <div className='aboutContainer'>
          <h2>About Me:</h2>
          <div className='aboutMeContainer'>
            <img src={headshot} width={110} alt={'professional headshot'}></img>
            <p>
              {paragraph}
            </p>
          </div>
        
          <div className='skillsContainer'>
            Technical Skills: <br />
            {(data as [Skill])
              .map(d => d.skill)
              .slice(0 , ((data as [Skill]).length > 15) ? 15 : undefined)
              .join(' - ')}
          </div>
        </div>
        );
    }
}
