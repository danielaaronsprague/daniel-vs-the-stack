import React from "react";
import Title from "./Title";
import { useRoutes } from "hookrouter";
import routes from "./routes";

const App = () => {
  const routeResult = useRoutes(routes);

  return (
    <div className='app'>
      <Title />

      <div id='content'>
        {/* <img
          src='/construct.jpg'
          alt='under construction'
          width='20%'
          height='auto'
        ></img> */}
        {routeResult || <h1>Page Not Found</h1>}
      </div>
    </div>
  );
};

export default App;
