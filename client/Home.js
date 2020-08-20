import React from "react";

export default function Home() {
  return (
    <div id='home'>
      <h1>Welcome to!</h1>
      <h2> DANIEL VS THE STACK! </h2>
      <img
        id='stick-daniel'
        className='title-item'
        src='/danielvsthestack.svg'
        alt='Daniel vs the stack'
      ></img>
      <p>
        Here lies the portfolio site of my engineering youth! As you can see
        things are still under construction around here but feel free to poke
        around!
      </p>
    </div>
  );
}
