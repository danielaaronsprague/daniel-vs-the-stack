import React from "react";
import Stack from "./Stack";
import Home from "./Home";

const routes = {
  "/": () => <Home />,
  "/daniel": () => <Stack />,
  "/stack": () => <Stack />,
};
export default routes;
