import React from "react";

export default function Projects() {
  return (
    <div id='projects'>
      <div className='one-project'>
        <a
          href='https://siqbeets.com'
          aria-label='check out my audio playground project: Siq Beets'
          rel='noopener'
          target='_blank'
        >
          Capstone Project: Siq Beets
        </a>
        <p style={{ fontSize: "15px", textAlign: "left", margin: "0" }}>
          // Full Stack Engineer <br />
          // Team of 3 <br />
          // Technologies Used: React / Redux / ToneJs / TravisCi / Firebase /
          React Bootstrap
        </p>
      </div>
      <div className='one-project'>
        <a
          href='https://www.danielvsthestack.com'
          aria-label='check out my Portfolio Website'
          rel='noopener'
          target='_blank'
        >
          This Website
        </a>
        <p style={{ fontSize: "15px", textAlign: "left", margin: "0" }}>
          // Full Stack Engineer
          <br />
          // Solo Project <br />
          //Technologies Used: React / Netlify / HookRouter
        </p>
      </div>
    </div>
  );
}
