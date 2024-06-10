import React from 'react'
import headshot from '../headshot.jpg'

export default function About() {
  return (
    <div className='aboutContainer'>
      <h2>About Me:</h2>
      <img src={headshot} width={110} alt={'professional headshot'}></img>
      <p>
        I am from Columbia, Missouri, and currently studying as a Junior for my
        Bachelors of Science in Computer Science with a minor in Mathematics at
        the University of Missouri and am expected to graduate in 2025. I
        currently have a 3.73 GPA. I am an aspiring Software Engineer, familiar
        with full-stack work and low-level systems programming, primarily with
        C, Javascript, Python, and Java. Also familiar with fameworks such as
        Node, React, and querying languages MongoDB/Mongoose, and SQL (MySQL &
        Microsoft SQL Server). I am currently preparing to work as a Software
        Engineer Intern at Lumeris, working as part of a team in an Agile
        Development process.
      </p>

      <div className='skillsContainer'>
        Technical Skills: <br />
        Software Engineering - Software Development - C Programming - Full-Stack
        Development - JavaScript Programming - SQL - MERN - Mathematics - Python
        Programming - Design - Agile Development - Low-level Programming
      </div>
      <a href='../Andrew_Stormer_Resume_SP2024.pdf' download>
        Download and view my resume
      </a>
    </div>
  )
}
