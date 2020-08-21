import React from "react";
import Title from "./Title";
import { useRoutes } from "hookrouter";
import routes from "./routes";

const App = () => {
  const routeResult = useRoutes(routes);

  return (
    <div className='app'>
      <Title />

      <div id='content'>{routeResult || <h1>Page Not Found</h1>}</div>
    </div>
  );
};

export default App;
