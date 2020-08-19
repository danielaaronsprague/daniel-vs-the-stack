import React from "react";

export default function Stack() {
  return (
    <div id='stack'>
      <div className='stack-item'>
        <h2 style={{ color: "#01daff" }}>React</h2>
      </div>
      <div className='stack-item'>
        <h2 style={{ color: "#764abc" }}>Redux</h2>
      </div>
      <div className='stack-item'>
        <h2 style={{ color: "#f0da1d" }}>Express</h2>
      </div>
      <div className='stack-item'>
        <h2 style={{ color: "#33648e" }}>Postgres</h2>
      </div>
      <div className='stack-item'>
        <h2 style={{ color: "#8bC500" }}>Node</h2>
      </div>
    </div>
  );
}
