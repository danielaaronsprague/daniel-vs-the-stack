import React from "react";
import { A } from "hookrouter";

export default function Title() {
  return (
    <div id='title'>
      <A href='/daniel' id='daniel' className='title-item'>
        <h1>daniel</h1>
      </A>
      <A href='/' id='home' className='title-item'>
        <h1 id='vs'>Vs</h1>
        <h1 id='secret-home'>Home</h1>
      </A>

      <A href='/stack' id='the-stack' className='title-item'>
        <div>
          <h1>TheStack</h1>
        </div>
      </A>
    </div>
  );
}
