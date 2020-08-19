import React from "react";
import { A } from "hookrouter";

export default function Title() {
  return (
    <div id='title'>
      <div id='home-nav'>
        <A href='/' className='title-item'>
          <h1 className='nav-item'>danielVsTheStack</h1>
        </A>
        <div id='stick-daniel'>
          <img
            className='title-item'
            src='/danielvsthestack.svg'
            alt='Daniel vs the stack'
          ></img>
        </div>
      </div>

      <div id='nav-container'>
        <A href='/daniel' className='title-item'>
          <h2 className='nav-item'>Daniel</h2>
        </A>

        <A href='/stack' className='title-item'>
          <h2 className='nav-item'>TheStack</h2>
        </A>

        <A href='/projects' className='title-item'>
          <h2 className='nav-item'>Projects</h2>
        </A>
        <a
          href='https://www.linkedin.com/in/5pr46u3/'
          className='title-item'
          rel='noopener'
          target='_blank'
        >
          <h2 className='nav-item'>LinkedIn</h2>
        </a>
        <a
          href='https://github.com/danielaaronsprague/'
          className='title-item'
          rel='noopener'
          target='_blank'
        >
          <h2 className='nav-item'>GitHub</h2>
        </a>
      </div>
    </div>
  );
}
