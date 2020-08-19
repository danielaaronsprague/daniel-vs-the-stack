import React from "react";
import Title from "./Title";
import { useRoutes } from "hookrouter";
import routes from "./routes";

// if ('serviceWorker' in navigator) {

//   navigator.serviceWorker
//     .register('./service-worker.js', { scope: './' })
//     .then(function(registration) {
//       console.log("Service Worker Registered");
//     })
//     .catch(function(err) {
//       console.log("Service Worker Failed to Register", err);
//     })

// }

const App = () => {
  const routeResult = useRoutes(routes);

  return (
    <div className='app'>
      <Title />

      <div id='content'>
        <img
          src='/construct.jpg'
          alt='under construction'
          width='10%'
          height='auto'
        ></img>
        {routeResult || <h1>Page Not Found</h1>}
      </div>
    </div>
  );
};

export default App;
