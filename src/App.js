import React, { Suspense } from "react";
import { BrowserRouter as Router, useRoutes, Navigate } from "react-router-dom";
import "./styles/output.css";

import Navbar from "./components/Layout/Navbar";
import SuspenseLoader from "./components/Layout/SuspenseLoader";
import Anime from "./pages/Anime";

const Routes = () => {
  let routes = useRoutes([
    { path: "/home", element: <Anime /> },
    { path: "/", element: <Navigate to="/home" /> },
  ]);
  return routes;
};

function App() {
  return (
    <Suspense fallback={<SuspenseLoader />}>
      <Navbar />
      <Router>
        <Routes />
      </Router>
    </Suspense>
  );
}

export default App;
