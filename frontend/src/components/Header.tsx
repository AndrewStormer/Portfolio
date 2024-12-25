const GitHub = require('../github_logo.png')
const LinkedIn = require('../linkedin_logo_header.png')


export default function Header() {

  return (
    <>
      <div className='grid grid-cols-2 gap-4 subpixel-antialiased font-sans font-semibold justify-stretch items-center md:w-screen max-h-40 min-h-16 border-b-5 border-bgpurple-100/20 bg-bgpurple-150'>
        <div className='pl-4 basis-1/2 col-span-1 flex'>
          <a
            href='#top'
            className='p-2 md:px-6 md:mx-4 text-md flex-initial text-bgpurple-50 hover:text-bgpurple-10/90 hover:bg-bgpurple-125 rounded-2xl hover:font-bold transition-all duration-300'
          >
            Home
          </a>{' '}
          <a
            href='#section1'
            className='p-2 md:px-6 md:mx-4 text-md flex-initial text-bgpurple-50 hover:text-bgpurple-10/90 hover:font-bold hover:bg-bgpurple-125 rounded-2xl transition-all duration-300'
          >
            About
          </a>{' '}
          <a
            href='#section2'
            className='p-2 md:px-6 md:mx-4 text-md flex-initial text-bgpurple-50 hover:text-bgpurple-10/90 hover:font-bold hover:bg-bgpurple-125 rounded-2xl'
          >
            Projects
          </a>{' '}
        </div>
        <div className='basis-1/2 col-start-2 flex justify-end'>
          <a
            href='https://github.com/AndrewStormer'
            className='p-2 md:px-6 text-md text-bgpurple-50 hover:text-bgpurple-10/90 hover:underline hover:bg-bgpurple-125 rounded-2xl'
            target='_blank'
            rel='noreferrer noopener'
          >
            <img src={GitHub} alt="GitHub" className="invert opacity-75 hover:text-bgpurple-10/90 hover:opacity-100 w-8" />
          </a>{' '}
          <br />
          <a
            href='https://www.linkedin.com/in/andrew-stormer-3a4b73221/'
            className='p-2 md:px-6 text-md text-bgpurple-50 hover:text-bgpurple-10/90 hover:underline hover:bg-bgpurple-125 rounded-2xl'
            target='_blank'
            rel='noreferrer noopener'
          >
            <img src={LinkedIn} alt="LinkedIn" className="invert opacity-75 hover:text-bgpurple-10/90 hover:opacity-100 w-8" />
          </a>{' '}
        </div>
      </div>
    </>
  )
}
