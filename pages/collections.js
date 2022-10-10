/* eslint-disable @next/next/no-img-element */
import React from "react";
import BaseLayout from "../lib/layout/baselayout";

function Collections() {
  const collections = [
    {
      image: "img/song-1.svg",
      title: "Limits",
      artist: "John Watts",
    },
    {
      image: "img/song-2.svg",
      title: "Limits",
      artist: "John Watts",
    },
    {
      image: "img/song-3.svg",
      title: "Limits",
      artist: "John Watts",
    },
    {
      image: "img/song-4.svg",
      title: "Limits",
      artist: "John Watts",
    },
  ];

  return (
    <BaseLayout>
      <div className="container mx-auto">
        {/* toolbar */}
        <div className="flex flex-row gap-4 items-center justify-start">
          <button className="bg-[#FACD66] text-[#1D2123] rounded-full px-8 py-2">
            My collection
          </button>

          <button className="border-[1px] border-gray-600 border-solid text-gray-600 rounded-full px-8 py-2">
            Likes
          </button>
        </div>

        {/* collections */}
        <div className="flex flex-row gap-4 items-center justify-start mt-8">
          {collections.map((collection, index) => (
            <div
              className="group relative w-[300px] h-auto rounded-lg overflow-hidden p-0 m-0"
              key={index}
            >
              <img
                src={collection.image}
                alt="collection"
                className="w-full h-full transform group-hover:scale-150 transition-all duration-300"
              />
              <button className="absolute right-[10%] bottom-[20%] bg-[#FACD66] rounded-full p-4 transition-all duration-300 opacity-0 group-hover:opacity-100">
                <img src="img/play.svg" alt="play" />
              </button>

              <div className="absolute bottom-0 left-0 flex flex-col gap-4 p-6">
                <label className="text-white text-2xl font-bold">
                  {collection.title}
                </label>
                <p className="text-gray-400 text-md font-light">
                  {collection.artist}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </BaseLayout>
  );
}

export default Collections;
