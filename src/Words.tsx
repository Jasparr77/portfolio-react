import React from 'react'

const Words = () => {
  
  return (
    <>
    <div className='wordContainer' id='introContainer'>
    <h1>
    Hi, I'm Jasper Croome.
    </h1>
    <p>
      I make delightful user experiences online through the use of modern web technologies.
    </p>
    <p>
    <a href="https://observablehq.com/@jasper">Observable</a> | <a 
    href="https://github.com/Jasparr77">Github</a> | <a 
    href="mailto:jaspercroome@protonmail.com">email</a> | <a 
    href="https://www.linkedin.com/in/jaspercroome/">LinkedIn</a> | <a 
    href="https://twitter.com/crasperjoome?lang=en">Twitter</a>
    </p>
    </div>

    <div className='wordContainer' id='workExamplesContainer'>
    <h4>
      Work Examples
    </h4>
    <p>
      Outside of work, I've had the opportunity to build some interesting things, like <br/><a 
      href="https://benicer.vercel.app/">a 3D globe to motivate people to be nicer</a> and <a 
      href="https://audioforma.vercel.app/#">a full-stack application to analyze the emotion in your spotify playlist</a>.
      <br/>At work, I build very cool things, all day long. This includes things like <br/>
      <b>A Data Visualization Library leveraging d3.js, react.js, and Typescript to deliver a delightful developer experience.</b><br/>
      <b>A bespoke web application built with react.js, Typescript & this library (☝️) providing team managers with insights into group performance.</b><br/>
      <b>A fleet of automated Analytics pipelines built on the AWS Stack, bringing data from DynamoDB through to insightful end-user facing dashboards.</b><br/>
    </p>
    </div>

    <div className='wordContainer' id='currentSkillsContainer'>
    <h4>
      Deepest Skills Today
    </h4>
    <p>
      I'm a front-end dev at heart, which means a lot of what I do at work 
      (and in my spare time) uses <br/>
      <a href='https://reactjs.org'>React</a>, <a 
      href='https://www.typescriptlang.org/'>TypeScript</a>, <a 
      href='https://d3js.org/'>D3.js</a>, and <a 
      href='https://www.adobe.com/creativecloud/ui-ux.html'>The Adobe Suite (Illustrator, XD, Photoshop)</a>.
    </p>
    </div>

    <div className='wordContainer' id='futureSkillsContainer'>
    <h4>Libraries and Frameworks I'm Learning</h4>
    <p>
      Nothing ever stays in place forever, so I'm also working to get up-to-speed with <br/>
    <a href="https://kit.svelte.dev/">Svelte</a> & <a 
    href="https://threejs.org/">Three.js</a>.
    </p>
    </div>

    <div className='wordContainer' id='otherSkillsContainer'>
    <h4>Other skills</h4>
    <p>
      I'm proud of my t-shaped skillset, and there are some dev-adjacent skills I've picked up on my journey.
      Namely, <b>
        agile methodology</b>, <b>
        analytics</b>, <b>
        aws</b>, <b>
        git cli</b>, <b>
        Mentoring</b>, <b>
        Microsoft Excel</b>, <b>
        Python</b>, <b>
        Tableau</b>, <b>
        Testing (unit)</b>, <b>
        User Interviewing & Research</b>, <b>
        User Training</b>, 
        and that's all I could think of, for now.
    </p>
    </div>
    </>
  )
}

export default Words;