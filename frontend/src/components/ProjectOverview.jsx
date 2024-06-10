import React from 'react'

export default function ProjectOverview() {
  return (
    <div className='projectOverviewContainer'>
      <div>
        <h2>Technical Projects:</h2>
        This is a showcase of some of the projects I have built for school,
        along with projects that I have made in my own time! Some projects may
        not provide source code, as they are solutions to assignments for some
        of my classes, and with respect to my professors I have chosen to
        refrain from posting them online.
      </div>
      <div className='skillsContainer'>
        <header>Portfolio Website</header>I developed this website using the
        MERN stack! It contains Mongoose documents for my relevant courses and
        my technical projects, allowing for easy insertion and deletion.
      </div>
      <div className='skillsContainer'>
        <header>
          <a href='/project/Python_Library'>Python Library </a>
        </header>
        A project that I developed in Python, using MySQL for the database. This
        application allows students to rent books, return books, and pay late
        fees that are automatically added to late returns.
      </div>
      <div className='skillsContainer'>
        <header>Better C Strings</header>
        A project that I developed in C, using only standard libraries (without
        string.h). My motivation for this project was that I was not impressed
        with some of the functionality of string.h, namely strtok and splitting
        using that function. This library implements a different solution than
        the standard C string, holding a pointer to both the first & last
        characters in a bstr_t struct. It also provides much additional
        functionality, e.g.) <br />
        - Append <br />
        - Split & Join <br />
        - Clean <br />
        - etc. <br />
      </div>
      <div className='skillsContainer'>
        <header>Album Rating Website</header>
        A project that was developed in part with Luke Roder using the MERN
        stack (Mongoose, Express, React, Node), in which we both took part in
        full-stack development of the website. The website provides the
        functionality to: <br />
        - Rate Albums <br />
        - View Recent User Ratings <br />
        - View Top Ratings <br />
        - Register & Login <br />
        Albums, users and ratings are stored in a mongoose database, and user
        passwords and hashed and salted to avoid decryption.
      </div>
    </div>
  )
}
