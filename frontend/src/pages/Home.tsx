import About from '../components/About'
import RelevantCourseWork from '../components/RelevantCourseWork'
import Skills from '../components/Skills'

const pdf = require('..//Andrew_Stormer_Resume_FL2024.pdf');

export default function Home() {
  return (
    <div className='homeContainer'>
      <div className='homeContentContainer'>
        <About />
        <RelevantCourseWork />
        <Skills />
        <a href={pdf} download>
          Download and view my resume
        </a>
      </div>
    </div>
  )
}
