import { useState } from "react";

import ImageLoader from "../Layout/ImageLoader";

export default function GridItem({ item }) {
  console.log("GridItem");
  const [imageLoad, setImageLoad] = useState(true);

  return (
    <div key={item.mal_id} className="group relative">
      <div
        className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {imageLoad && <ImageLoader />}
        <img
          style={{ display: imageLoad ? "none" : "block" }}
          src={item.image_url}
          alt={item.imageAlt}
          onLoad={() => setImageLoad(false)}
          className="w-full h-full object-center object-cover lg:w-full lg:h-full"
        />
      </div>
      <div className="block mt-4 flex justify-between rounded shadow bg-yellow-500 border border-blue-500">
        <div>
          <h3 className="text-sm">{item.title}</h3>
          <span>Episodes {item.episodes}</span>
        </div>
        <span>{item.rated}</span>
      </div>
    </div>
  );
}
