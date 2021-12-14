import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import AnimeService from "../services/anime.service";

import Details from "../components/Details";
import SuspenseLoader from "../components/Layout/SuspenseLoader";

export default function AnimeDetail() {
  const { id } = useParams();

  const [anime, setAnime] = useState({});
  const [loading, setLoading] = useState(true);

  const getAnimeDetails = () => {
    setLoading(true);
    AnimeService.getAnimeDetails(id).then(
      (response) => {
        setAnime(response.data);
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
    getAnimeDetails();
  }, []);

  return loading ? (
    <SuspenseLoader />
  ) : (
    <Details
      image_url={anime.image_url}
      title={anime.title}
      episodes={anime.episodes}
      title_japanese={anime.title_japanese}
      rating={anime.rating}
      synopsis={anime.synopsis}
      url={anime.url}
      trailer_url={anime.trailer_url}
    />
  );
}
