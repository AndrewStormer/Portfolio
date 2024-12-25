import RelevantCourseWork from "./RelevantCourseWork";
import Skills from "./Skills";


export default function About() {

    const paragraph = `   \tHey, I'm Andrew Stormer, a senior Computer Science major at The University of Missouri-Columbia with a passion`
    + ` for software development / engineering and mathematics. I love solving problems through code and enjoy working on projects that challenge`
    + `me to learn new things. Studying at The University of Missouri has grown my passion for software engineering and has pushed me `
    + `to throughly learn core computer science and programming concepts. During my education, my interests in web development, both in`
    + `full-stack and backend development, and low-level systems programming have grown significantly by working with languages and technologies `
    + ` such as NodeJS, React, Javascript, HTML, CSS, and C. During my summer after my junior year, I worked as an Software Engineering Intern`
    + ` at Lumeris, a Healthcare solutions based company out of St. Louis, where I worked in a Scrum team as a backend developer. During my `
    + `internship I created an API with the help of my mentor using NestJS and Typescript, that worked with a MySQL database using TypeORM, and `
    + `deployed it into production using CI/CD and IAC (Infrastucture as Code) to deploy the AWS resources. Since then I have taken courses on `
    + `Computer Networks and Cyber Defense that has grown my knowledge and skills in cyber security, aiding in the development of web applications. `
    + `Currently, I'm looking for a Software Engineering role where I can apply my skills in a collaborative environment that allows me to continue to learn and grow.`
    
    
    return (
      <div className='clearfix'>
        <h1 className='pt-24 md:pt-40 px-4 m-auto text-4xl text-bgpurple-10 font-semibold font-serif text-center'>About Andrew Stormer</h1>

        <div className='clearfix py-4 pb-12 mb-8'>

          <div className='px-8 pb-4 md:pb-8'>
            <p className='text-content indent-8 text-pretty text-center text-lg text-bgpurple-10/60'>
              {paragraph}
            </p>
          </div>


          <h2 className='p-4 pt-8 text-2xl text-bgpurple-50 font-semibold font-serif'>Education</h2>

          <div className="pb-4">
            <ul className='px-8 text-lg text-bgpurple-5/80'>
              <li className='flex justify-between'>University of Missouri - Columbia <p className='text-right'><b>May 2025</b></p></li>
              <li className='flex justify-between'>Major in Computer Science<p className='text-right'>Cumulative GPA: <b>3.72</b></p></li>
              <li>Minor in Mathematics</li>
              <br />
              <li>Member of Mizzou Computing Association (MCA) & Kappa Sigma Fraternity</li>
            </ul>
          </div>

          <RelevantCourseWork />

          <Skills />


          <div className='text-center'>
            <a className="p-4 leading-loose text-bgpurple-50/60 underline hover:text-bgpurple-10/90 place-self-center">View my Resume here</a>
          </div>
        </div>
      </div>
    );
}
