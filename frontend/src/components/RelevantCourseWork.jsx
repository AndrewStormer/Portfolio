import React, { useState, useEffect } from 'react'

//TODO: Put classes in a database? Easy to add to in the future

export default function RelevantCourseWork() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch(`http://localhost:3001/course`)
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error))
  }, [])
  if (data != null) {
    const rows = []
    for (let i = 0; i < data.length; i++) {
      rows.push(
        <li>
          <a
            href={data[i].link}
            className='courseLink'
            target='_blank'
            rel='noreferrer noopener'
          >
            {data[i].department} {data[i].number}: {data[i].name} (
            {data[i].grade})
          </a>
        </li>,
      )
    }
    return (
      <div className='courseworkContainer'>
        <h2>Relevant Coursework:</h2>

        <div className='courseList'>
          <ul>
            Course Number: Course Name (Grade)
            {rows}
          </ul>
        </div>
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
