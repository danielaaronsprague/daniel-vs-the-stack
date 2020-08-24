import React from "react";

export default function Stack() {
  return (
    <div id='stack'>
      <div className='one-project'>
        <h1>TheStack</h1>
        <div className='stack-item'>
          <h3 style={{ color: "#01daff" }}>React</h3>
        </div>
        <div className='stack-item'>
          <h3 style={{ color: "#764abc" }}>Redux</h3>
        </div>
        <div className='stack-item'>
          <h3 style={{ color: "#f0da1d" }}>Express</h3>
        </div>
        <div className='stack-item'>
          <h3 style={{ color: "#33648e" }}>Postgres</h3>
        </div>
        <div className='stack-item'>
          <h3 style={{ color: "#8bC500" }}>Node</h3>
        </div>
        <p>
          During my time at coding bootcamp I was immersed in the stack above.
          And while I feel confident in it I think my greatest take away from
          bootcamp was the ability to learn new technologies fast... blazingly
          fast! Even now I am not sure how I was able to go from knowing nothing
          about code to confidently building this portfolio site in days with
          only a few months of learning. Learning new technology is what excites
          me. <br />
          <br />
          Finding a way to harness those technologies to solve world problems...{" "}
          <br />
          <br />
          that is my passion.
        </p>
      </div>
      <div className='one-project'>
        <h1>Current Technolgies</h1>
        <p>
          Sequelize, HTML5/CSS, Travis CI, Git, Github, Webpack, PostgreSQL,
          Axios, Expo, JSON, Jasmine, Mocha & Chai. Firebase, Babel, Socket.io,
          React Native
        </p>
      </div>
    </div>
  );
}
