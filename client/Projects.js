import React from "react";

export default function Projects() {
  return (
    <div id='projects'>
      <a
        href='https://siqbeets.com'
        aria-label='check out my audio playground project: Siq Beets'
        rel='noopener'
        target='_blank'
      >
        <h2>siqBeets</h2>
      </a>
      <div className='one-project'>
        <p style={{ fontSize: "18px", textAlign: "left", margin: "0" }}>
          // Full Stack Engineer <br /> <br />
          // Team of 3 <br /> <br />
          // Technologies Used: React / Redux / ToneJs / TravisCi / Firebase /
          React Bootstrap
        </p>
      </div>
      <a
        href='https://www.danielvsthestack.com'
        aria-label='check out my Portfolio Website'
        rel='noopener'
        target='_blank'
      >
        <h2>thisWebsite</h2>
      </a>
      <div className='one-project'>
        <p style={{ fontSize: "18px", textAlign: "left", margin: "0" }}>
          // Full Stack Engineer
          <br /> <br />
          // Solo Project <br /> <br />
          //Technologies Used: React / Netlify / HookRouter
        </p>
      </div>
    </div>
  );
}
