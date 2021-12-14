import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import GridList from "../components/Grid/GridList";
import SuspenseLoader from "../components/Layout/SuspenseLoader";
import Card from "../components/Layout/Card";
import Searchbar from "../components/Layout/Searchbar";

import AnimeService from "../services/anime.service";

export default function SearchResults() {
  const { query } = useParams();

  const [animes, setAnimes] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAnimes = (search_text) => {
    console.log(search_text);
    setLoading(true);
    AnimeService.getAnimeSearch(search_text).then(
      (response) => {
        setAnimes(response.data.results);
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
    const search_query = query.split("+").join(" ");
    getAnimes(search_query);
  }, [query]);

  return (
    <Card>
      <Searchbar />
      {loading ? <SuspenseLoader /> : <GridList list={animes} />}
    </Card>
  );
}
