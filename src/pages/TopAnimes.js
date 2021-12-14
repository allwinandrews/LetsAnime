import React, { useState, useEffect } from "react";

import GridList from "../components/Grid/GridList";
import SuspenseLoader from "../components/Layout/SuspenseLoader";
import Card from "../components/Layout/Card";
import Searchbar from "../components/Layout/Searchbar";

import AnimeService from "../services/anime.service";

const Home = React.memo(() => {
  console.log("Home");
  const [animes, setAnimes] = useState([]);
  const [loading, setLoading] = useState(true);

  const getTopAnimes = () => {
    setLoading(true);
    AnimeService.getTopAnimes().then(
      (response) => {
        setAnimes(response.data.top);
        setLoading(false);
      },
      (error) => {
        console.log(error.toString());
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        console.log(error);
        setAnimes(_content);
        setLoading(false);
      }
    );
  };

  useEffect(() => {
    getTopAnimes();
  }, []);

  return (
    <Card>
      <Searchbar />
      {loading ? <SuspenseLoader /> : <GridList list={animes} />}
    </Card>
  );
});

export default Home;
