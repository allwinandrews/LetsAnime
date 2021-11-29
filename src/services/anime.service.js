import api from "./api";

const getAnimeSearch = (query) => {
  return api.get(`search/anime?q=${query}`);
};

const AnimeService = {
  getAnimeSearch,
};

export default AnimeService;
