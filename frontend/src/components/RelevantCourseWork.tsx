import { useState, useEffect } from 'react'

import { get } from 'aws-amplify/api';

async function getCourses() {
  try {
    const httpOperation = get({ 
      apiName: 'myHttpApi',
      path: 'course' 
    });
    const response = await httpOperation.response;
    console.log('GET call succeeded: ', response);
  } catch (error) {
    console.log('GET call failed: ', JSON.parse(error.response.body));
  }
}

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
    getCourses()
  }, [])

  return (
    <div>
      <h2 className='p-4 pt-8 text-2xl text-bgpurple-50 font-semibold font-serif'>Relevant Coursework</h2>
      <div className='px-4 mb-8 text-bgpurple-10'>
          <h2 className='pt-0 p-4 text-xl'>Course Number: Course Name (Grade)</h2>
          <ul className="list-disc h-64 px-2 bg-bgpurple-800/70 rounded-2xl overflow-y-scroll overscroll-contain border-5 border-bgpurple-100/30">
            {(data as [Course])?.map((d) => (
              <li className='mx-12 m-2 list-inside'>
                  <a
                    href={d.link}
                    className='underline text-lg text-bgpurple-10/80 tracking-wide hover:text-bgpurple-10/90'
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
  )
}
