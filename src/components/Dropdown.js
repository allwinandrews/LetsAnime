import React from "react";
import { Link } from "react-router-dom";

const Dropdown = React.memo(({ items }) => {
  console.log(items);

  let itemList = null;

  if (Array.isArray(items))
    itemList = items.map((item) => (
      <Link
        key={item.mal_id}
        className="cursor-pointer group hover:bg-blue-100"
        style={{ display: "flex" }}
        to={`/anime/`}
      >
        <img
          style={{ height: "10%", width: "10%" }}
          src={item.image_url}
          alt={item.imageAlt}
        />
        <a className="block p-2 border-transparent border-l-4">{item.title}</a>
      </Link>
    ));

  return (
    <div
      style={{
        zIndex: 1,
        overflowY: "scroll",
        height: "400px",
      }}
      className="absolute rounded shadow bg-white overflow-hidden peer-checked:flex flex-col w-full mt-1 border border-gray-200"
    >
      {itemList}
    </div>
  );
});

export default Dropdown;
