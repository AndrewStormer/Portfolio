import React, { useState, useEffect } from 'react'

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
  useEffect(() => {
    fetch(`http://localhost:3001/course`)
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error))
  }, [])

  return (
    <div>
    <h2 className='relevantCourseworkHeader'>Relevant Coursework:</h2>
    <div className='courseworkContainer'>
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
    </div>
    </div>
  )
}
