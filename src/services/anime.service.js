import api from "./api";

const getAnimeSearch = (query, pageNo = 1) => {
  return api.get(`search/anime?q=${query}&page=${pageNo}`);
};

const getTopAnimes = () => {
  return api.get("top/anime");
};

const getAnimeDetails = (id) => {
  return api.get(`anime/${id}`);
};

const AnimeService = {
  getAnimeSearch,
  getTopAnimes,
  getAnimeDetails,
};

export default AnimeService;
