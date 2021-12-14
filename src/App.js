import React, { Suspense } from "react";
import { BrowserRouter as Router, useRoutes, Navigate } from "react-router-dom";
import "./styles/output.css";

import Navbar from "./components/Layout/Navbar";
import SuspenseLoader from "./components/Layout/SuspenseLoader";
import Card from "./components/Layout/Card";
import Searchbar from "./components/Layout/Searchbar";

import TopAnimes from "./pages/TopAnimes";
import AnimeDetail from "./pages/AnimeDetail";
import SearchResults from "./pages/SearchResults";

const Routes = () => {
  let routes = useRoutes([
    { path: "/top-animes", element: <TopAnimes /> },
    { path: "/", element: <Navigate to="/top-animes" /> },
    { path: "/results/search_query=:query", element: <SearchResults /> },
    { path: "/anime/:id", element: <AnimeDetail /> },
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
