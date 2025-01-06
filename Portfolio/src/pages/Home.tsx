import About from '../components/About'
import Greeting from '../components/Greeting';
import Projects from './Projects';
import Header from '../components/Header'

const pdf = require('..//Andrew_Stormer_Resume_FL2024.pdf');

export default function Home() {  return (
    <div 
      className='subpixel-antialiased font-sans w-screen scroll-smooth'>
      <div className='fixed object-top pb-16 md:mb-40'>
        <Header />
      </div>
      <Greeting />
      <div id="section1" >
        <About />
      </div>
      <Projects />
    </div>
  )
}
function setData(json: any): any {
  throw new Error('Function not implemented.');
}

