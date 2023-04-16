import React from "react";
import { Route, Routes } from "react-router-dom";
import TopNav from "./components/TopNav";
import BaseLayout from "./components/BaseLayout";
import { routesLink } from "./routes";

function App() {
  return (
    <>
      <BaseLayout>
        <Routes>
          {routesLink.map((route, index) => (
            <Route key={index} path={route.path} element={route.Element} />
          ))}
        </Routes>
      </BaseLayout>
    </>
  );
}

export default App;
