import React, { useState, useEffect } from 'react'
//import axios from 'axios'

export interface Course {
  id: number,
  department: string,
  number: number,
  name: string,
  grade: string,
  link?: string
}

export default function RelevantCourseWork() {
  const [data, setData] = useState();

  // useEffect(() => {
  //   axios.get('http://localhost:3001/course')
  //   .then((response => {
  //     setData(response.data);
  //   }))
  // })
  useEffect(() => {
    fetch(`http://localhost:3001/course`)
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error))
  }, [])
  if (data != null) { 
    return (
      <div className='courseworkContainer'>
        <h2>Relevant Coursework:</h2>

        <div className='courseList'>
          <ul>
            Course Number: Course Name (Grade)
            {(data as [Course])?.map((d) => (
              <li>
                  <a
                    href={d.link}
                    className='courseLink'
                    target='_blank'
                    rel='noreferrer noopener'
                  >
                    {d.department} {d.number}: {d.name} ({d.grade})
                  </a>
                </li>
                )
              )}
          </ul>
        </div>
        <a href='../public/Andrew_Stormer_Resume_SP2024.pdf' download>
        Download and view my resume
        </a>
      </div>
    )
  } else {
    return (
      <div className='courseworkContainer'>
        <h2>Relevant Coursework:</h2>
        <div className='courseList'>
          <ul>
            Course Number: Course Name (Grade)
            <li>CMP_SC 4520: Operating System (A)</li>
            <li>CMP_SC 4320: Software Engineering (A-)</li>
            <li>CMP_SC 4050: Design & Analysis of Algorithms I (A-)</li>
            <li>
              CMP_SC 3280: Database Applications & Information Systems (A)
            </li>
            <li>CMP_SC 3380: Object Oriented Programming (A)</li>
            <li>MATH 4120: Combinatorics & Graph Theory (A-)</li>
            <li>MATH 4310: Numerical Linear Algebra (B+)</li>
            <li>MATH 2320: Discrete Math Structures (A)</li>
            <li>STAT 4710: Introduction to Mathematical Statistics (A)</li>
            <li>INFOTC 4401: Python I (A)</li>
          </ul>
        </div>
      </div>
    )
  }
}
