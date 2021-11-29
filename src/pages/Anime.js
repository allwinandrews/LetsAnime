import React, { useState, useEffect } from "react";

import Card from "../components/Layout/Card";
import GridList from "../components/Grid/GridList";

import AnimeService from "../services/anime.service";

export default function Anime() {
  const [animes, setAnime] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAnimes = (query) => {
    setLoading(true);
    AnimeService.getAnimeSearch(query).then(
      (response) => {
        console.log(response.data);
        setAnime(response.data.results);
        setLoading(false);
      },
      (error) => {
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

  return (
    <Card>
      <GridList list={animes} />
    </Card>
  );
}
