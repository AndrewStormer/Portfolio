import React from 'react'
import About from '../components/About'
import RelevantCourseWork from '../components/RelevantCourseWork'
import ProjectOverview from '../components/ProjectOverview'

export default function Home() {
  return (
    <div className='homeContainer'>
      <div>
        <About />
        <RelevantCourseWork />
      </div>
      <div>
        <ProjectOverview />
      </div>
    </div>
  )
}
