import { useState } from "react";

import ImageLoader from "./Layout/ImageLoader";

export default function Details({
  image_url,
  title,
  episodes,
  title_japanese,
  rating,
  synopsis,
  url,
  trailer_url,
}) {
  console.log("Details");
  const [imageLoad, setImageLoad] = useState(true);

  const openInNewTab = (url) => {
    window.open(url, "_blank").focus();
  };

  return (
    <section className="text-gray-700 body-font overflow-hidden bg-white">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          {imageLoad && <ImageLoader />}
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
            src={image_url}
            onLoad={() => setImageLoad(false)}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {title}
            </h1>
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              {episodes} Episodes
            </h2>
            <div className="flex mb-4">
              <span className="flex items-center">
                <span className="text-gray-600 ml-3">{title_japanese}</span>
              </span>
              <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                {rating}
              </span>
            </div>
            <p className="leading-relaxed">{synopsis}</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5"></div>
            <div className="flex">
              <button
                onClick={() => openInNewTab(url)}
                className="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded"
              >
                Read More
              </button>
              <button
                onClick={() => openInNewTab(trailer_url)}
                className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
              >
                Watch Trailer
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
