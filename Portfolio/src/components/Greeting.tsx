const headshot = require('../headshot.jpg');

export default function Greeting() {
  return (
    <div className='grid grid-cols-3 gap-4 h-screen max-w-screen-sm w-screen md:w-screen md:max-w-screen-2xl text-bgpurple-5'>
       <div className='basis-1/3 col-span-1 place-self-center'>
            <img src={headshot} alt='Beatiful Headshot goes here' className='ml-2 w-32 md:min-w-72 md:max-w-80 rounded-lg place-self-center'/>
       </div>
       <div className='basis-2/3 col-start-2 col-span-2 place-self-center'>
            <h1 className='font-serif m-2 ml-0 md:m-8 text-center md:text-left text-5xl md:text-7xl max-w-2xl place-self-center'>
                Hey, I'm Andrew, Student & Developer
            </h1>
            <h2 className='font-serif m-2 md:m-8 text-center md:text-left max-w-2xl'>
                I'm a Senior at The University of Missouri passionate in full-stack development of clean, responsive and scalable applications seeking software development positions after graduation.
            </h2>
       </div>
    </div>
  )
}
