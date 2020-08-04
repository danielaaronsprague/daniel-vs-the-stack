import React from "react";
import Title from "./Title";
import { useRoutes } from "hookrouter";
import routes from "./routes";

const App = () => {
  const routeResult = useRoutes(routes);

  return (
    <div className='app'>
      <Title />
      {routeResult || <h1>Page Not Found</h1>}
    </div>
  );
};

export default App;
