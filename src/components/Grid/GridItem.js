import { useState } from "react";

import ImageLoader from "../Layout/ImageLoader";

export default function GridItem({ item }) {
  console.log(item);
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
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <span aria-hidden="true" className="absolute inset-0" />
            {item.title}
          </h3>
          <div data-title="This is a longer text mmmmmmmmmmmmmmmmmmmmm">
            This is a longer text
          </div>
          <span>Episodes</span>
          <p className="mt-1 text-sm text-gray-500">{item.episodes}</p>
        </div>
        <span>Rated</span>
        <p className="text-sm font-medium text-gray-900">{item.rated}</p>
      </div>
    </div>
  );
}
