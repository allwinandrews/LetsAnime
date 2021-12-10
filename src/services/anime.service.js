import api from "./api";

const getAnimeSearch = (query, pageNo = 1) => {
  return api.get(`search/anime?q=${query}&page=${pageNo}`);
};

const AnimeService = {
  getAnimeSearch,
};

export default AnimeService;
