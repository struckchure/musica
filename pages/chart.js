/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import BaseLayout from "../lib/layout/baselayout";

function Chart() {
  const tracks = [
    {
      image: "/img/song-5.svg",
      artist: "Krisx",
      title: "Let me love you",
      album: "Single",
      duration: "4:17",
    },
    {
      image: "/img/song-7.svg",
      artist: "Burna",
      title: "Watin man go do",
      album: "African giant",
      duration: "2:30",
    },
    {
      image: "/img/song-8.svg",
      artist: "Davido",
      title: "Stand strong",
      album: "Single",
      duration: "2:02",
    },
    {
      image: "/img/song-9.svg",
      artist: "Ybee",
      title: "Closa",
      album: "Obi datti",
      duration: "3:23",
    },
  ];

  return (
    <BaseLayout background={"url(/img/chart-bg.svg) no-repeat top/cover"}>
      <section className="flex flex-row gap-4 justify-start items-end w-full h-[50vh] container mx-auto">
        <div className="w-[50%] h-full">
          <img
            src="/img/album-cover-3.svg"
            alt="album cover"
            className="rounded-xl w-auto h-full"
          />
        </div>

        <div className="w-full h-full flex flex-col gap-[5rem] justify-end items-start py-8">
          <div className="flex flex-col gap-4 justify-end items-start">
            <h4 className="font-bold text-3xl text-white">Tomorrow's tunes</h4>

            <p className="text-white font-light">
              5 Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis
            </p>
            <label className="text-white font-light text-md">
              64 songs ~ 16 hrs+
            </label>
          </div>

          <div className="flex flex-row justify-start items-center gap-3">
            <button className="rounded-full bg-gray-700 px-6 py-2 text-gray-400 flex items-center justify-center gap-2">
              <span className="rounded-full bg-yellow-600 grid place-items-center p-1">
                <img src="/img/play.svg" alt="play" />
              </span>
              <span>Play all</span>
            </button>

            <button className="rounded-full bg-gray-700 px-6 py-2 text-gray-400 flex items-center justify-center gap-2">
              <span className="rounded-full bg-yellow-600 grid place-items-center p-1">
                <img src="/img/music-square-add.svg" alt="add-to-collection" />
              </span>
              <span>Add to collection</span>
            </button>
          </div>
        </div>
      </section>

      <section className="w-full h-fit flex flex-col gap-4 justify-start items-center py-10 container mx-auto">
        {tracks.map((track, index) => (
          <div
            key={index}
            className="flex flex-row gap-4 justify-between items-center bg-[rgba(51,55,59,0.37)] rounded-[20px] p-4 w-full h-fit"
          >
            <div className="flex flex-row items-center gap-4">
              <img
                src={track.image}
                alt="song"
                className="w-16 h-16 rounded-xl"
              />
              <button className="grid place-items-center">
                <img
                  src="/img/heart-3.svg"
                  alt="add-to-favorite"
                  className="w-6 h-6"
                />
              </button>
            </div>

            <label className="w-fit text-white fong-light">
              {track.title} ~ {track.artist}
            </label>

            <label className="w-fit text-white fong-light">{track.album}</label>

            <label className="w-fit text-white fong-light">
              {track.duration}
            </label>

            <button className="grid place-items-center">
              <img src="/img/elipsis.svg" alt="more" className="w-6 h-6" />
            </button>
          </div>
        ))}
      </section>
    </BaseLayout>
  );
}

export default Chart;
