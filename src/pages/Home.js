import React, { useState, useEffect } from "react";

import Card from "../components/Layout/Card";
import GridList from "../components/Grid/GridList";
import Searchbar from "../components/Layout/Searchbar";
import SuspenseLoader from "../components/Layout/SuspenseLoader";

import AnimeService from "../services/anime.service";

const Home = React.memo(() => {
  console.log("Home");
  const [animes, setAnime] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAnimes = (query) => {
    setLoading(true);
    AnimeService.getAnimeSearch(query).then(
      (response) => {
        setAnime(response.data.results);
        setLoading(false);
      },
      (error) => {
        console.log(error.toString());
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        console.log(error);
        setAnime(_content);
        setLoading(false);
      }
    );
  };

  useEffect(() => {
    getAnimes("naruto");
  }, []);

  const handleSearchBarResponse = (res) => getAnimes(res);

  return (
    <Card>
      <Searchbar
        getFunction={AnimeService.getAnimeSearch}
        passSearchText={handleSearchBarResponse}
      />
      {loading ? <SuspenseLoader /> : <GridList list={animes} />}
    </Card>
  );
});

export default Home;
