import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Dropdown from "../Dropdown";

import AnimeService from "../../services/anime.service";

const Searchbar = React.memo(() => {
  console.log("Searchbar");
  const navigate = useNavigate();

  const pathNameArray = window.location.pathname.split("/");

  let searchQuery = pathNameArray.find((string) =>
    string.includes("search_query=")
  );

  let toBeSearchText = "";
  if (searchQuery) {
    const search_query = searchQuery.replace("search_query=", "");
    toBeSearchText = search_query.split("+").join(" ");
  }

  console.log(toBeSearchText);
  const [searchText, setSearchText] = useState(toBeSearchText);
  const [results, setResults] = useState([]);
  const [loader, setLoader] = useState(false);

  const getResults = (query) => {
    setLoader(true);
    AnimeService.getAnimeSearch(query).then(
      (response) => {
        setResults(response.data.results);
        setLoader(false);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        console.log(error);
        setResults(_content);
        setLoader(false);
      }
    );
  };

  useEffect(() => {
    if (searchText.length > 2) getResults(searchText);
  }, [searchText]);

  const handleChange = (event) => {
    event.preventDefault();
    const { value } = event.target;
    console.log(value);

    if (value === "") setResults([]);
    setSearchText(value);
  };

  const handleSearch = () => {
    setResults([]);
    const search_query = searchText.replace(/ /g, "+");
    navigate(`/results/search_query=${search_query}`);
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="relative">
        <div className="h-10 bg-white flex border border-gray-200 rounded items-center">
          <input
            type="text"
            className="px-9 py-2 w-80"
            placeholder="Search..."
            value={searchText}
            onChange={handleChange}
          />
          <button
            className="h-10 w-40 text-white rounded-lg bg-red-500 hover:bg-red-600"
            onClick={handleSearch}
          >
            GO
          </button>
        </div>
        {Array.isArray(results) && results.length > 0 && (
          <Dropdown items={results} />
        )}
      </div>
    </div>
  );
});

export default Searchbar;
