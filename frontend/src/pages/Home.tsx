import About from '../components/About'
import RelevantCourseWork from '../components/RelevantCourseWork'

export default function Home() {
  return (
    <div className='homeContainer'>
      <div className='homeContentContainer'>
        <About />
        <RelevantCourseWork />
      </div>
    </div>
  )
}
