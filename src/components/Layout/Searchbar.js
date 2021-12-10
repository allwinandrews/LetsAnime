import React, { useEffect, useState } from "react";

import Dropdown from "../Dropdown";

const Searchbar = React.memo(({ getFunction, passSearchText }) => {
  console.log("Searchbar");
  const [searchText, setSearchText] = useState("");
  const [results, setResults] = useState([]);
  const [loader, setLoader] = useState(false);

  const getResults = (query) => {
    setLoader(true);
    getFunction(query).then(
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
    if (searchText) getResults(searchText);
  }, [searchText]);

  const handleChange = (event) => {
    event.preventDefault();
    const { value } = event.target;
    if (value === "") setResults([]);
    else setSearchText(value);
  };

  const handleSearch = () => {
    passSearchText(searchText);
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
        {results.length > 0 && <Dropdown items={results} />}
      </div>
    </div>
  );
});

export default Searchbar;
