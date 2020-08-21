import React from "react";

export default function Home() {
  return (
    <div id='home'>
      <h1>Welcome to!</h1>
      <h2> DANIEL VS THE STACK! </h2>
      <img
        id='stick-daniel'
        className='title-item'
        src='/danielvsthestack-color.svg'
        alt='Daniel vs the stack'
      ></img>
      <img
        src='/construct.jpg'
        alt='under construction'
        width='20%'
        height='auto'
      ></img>
      <p>
        Here lies the portfolio site of my engineering youth!
        <br /> As you can see things are still under construction around here
        but feel free to poke around!
      </p>
    </div>
  );
}
