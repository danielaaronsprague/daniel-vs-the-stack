import React from "react";
import Stack from "./Stack";
import Home from "./Home";
import Daniel from "./Daniel";
import Projects from "./Projects";

const routes = {
  "/": () => <Home />,
  "/daniel": () => <Daniel />,
  "/stack": () => <Stack />,
  "/projects": () => <Projects />,
};
export default routes;
