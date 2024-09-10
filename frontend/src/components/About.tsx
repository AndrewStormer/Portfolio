const headshot = require('../headshot.jpg');

export default function About() {

    const paragraph = `I'm Andrew Stormer, a senior at The University of Missouri majoring in Computer Science and minoring in Mathematics.`
    + ` I am familiar with C, Typescript & Javascript, Python and Assembly languages, as well as SQL and Mongoose querying languages. I excel in backend development`
    + `, working as a backend developer during my software engineering internship at Lumeris. From that experience I am familiar with the process of standing up a `
    + `corporate scale API using NestJS with Typescript that manage AWS resources with IAC and the process of deploying said API. I have additional interests in `
    + `low-level systems programming and machine learning engineering with strong backgrounds in operating systems and linear algebra/statistics respectively.`

    return (
      <div className='aboutContainer'>
        <h2>About Me:</h2>
        <div className='aboutMeContainer'>
          <img src={headshot} alt={'professional headshot'} />
          <p className='aboutMeParagraph'>
            {paragraph}
          </p>
        </div>
      </div>
    );
}
