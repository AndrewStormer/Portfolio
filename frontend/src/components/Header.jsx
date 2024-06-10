import React from 'react'

export default function Header() {
  return (
    <>
      <div className='headerContainer'>
        <h1>Andrew Stormer</h1> <br />
        <a href='http://localhost:3000'>Home</a>
        <br />
        <a
          href='https://github.com/AndrewStormer'
          target='_blank'
          rel='noreferrer noopener'
        >
          Github
        </a>{' '}
        <br />
        <a
          href='https://www.linkedin.com/in/andrew-stormer-3a4b73221/'
          target='_blank'
          rel='noreferrer noopener'
        >
          LinkedIn
        </a>{' '}
        <br />
        <div>
          Contact me via LinkedIn <br />
          or at Abstormer97@gmail.com <br />
        </div>
      </div>
      <header className='headerUnderline' />
    </>
  )
}
