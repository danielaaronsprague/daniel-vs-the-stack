import React from "react";
import Stack from "./Stack";
import Home from "./Home";
import Daniel from "./Daniel";

const routes = {
  "/": () => <Home />,
  "/daniel": () => <Daniel />,
  "/stack": () => <Stack />,
};
export default routes;
