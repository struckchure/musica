/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import BaseLayout from "../lib/layout/baselayout";

function Index() {
  const new_releases = [
    {
      image: "/img/song-1.svg",
      title: "Life in a bubble",
      artist: "The van",
    },
    {
      image: "/img/song-2.svg",
      title: "Mountain",
      artist: "Krisx",
    },
    {
      image: "/img/song-3.svg",
      title: "Limits",
      artist: "John Dillion",
    },
    {
      image: "/img/song-4.svg",
      title: "Everything's black",
      artist: "Ameed",
    },
    {
      image: "/img/song-5.svg",
      title: "Cancelled",
      artist: "Enimem",
    },
    {
      image: "/img/song-6.svg",
      title: "Nomad",
      artist: "Makrol Eli",
    },
    {
      image: "/img/song-1.svg",
      title: "Life in a bubble",
      artist: "The van",
    },
    {
      image: "/img/song-2.svg",
      title: "Mountain",
      artist: "Krisx",
    },
    {
      image: "/img/song-3.svg",
      title: "Limits",
      artist: "John Dillion",
    },
    {
      image: "/img/song-4.svg",
      title: "Everything's black",
      artist: "Ameed",
    },
    {
      image: "/img/song-5.svg",
      title: "Cancelled",
      artist: "Enimem",
    },
    {
      image: "/img/song-6.svg",
      title: "Nomad",
      artist: "Makrol Eli",
    },
  ];
  const popular_in_your_area = new_releases;

  return (
    <BaseLayout>
      <div className="container mx-auto h-full">
        <section className="flex flex-row items-start justify-center gap-x-10">
          <div className="flex flex-row justify-between items-center bg-[#609EAF] rounded-[40px] h-[450px] w-full py-0 relative overflow-hidden">
            {/* wave ripple as absolute background */}
            <div className="absolute top-0 right-[-15%] w-full h-full rounded-[40px] z-0">
              <img
                src="/img/wave-ripple.svg"
                alt="wave ripple"
                className="w-full h-full"
              />
            </div>

            <div className="flex flex-col items-start justify-between pt-10 pb-20 pl-10 z-10 h-full">
              <label className="text-white font-extralight text-3xl">
                Currated Playlist
              </label>

              <div className="flex flex-col items-start justify-center">
                <h4 className="font-bold text-white tracking-[10px]">
                  R&B Hits
                </h4>
                <p className="text-white pt-5">
                  All mine, Lie again, Petty call me everyday, Out of time, No
                  love, Bad habit, and so much more
                </p>
              </div>

              {/* stacked users */}
              <div className="flex flex-row items-center justify-start w-full">
                <div className="flex flex-row items-center justify-start gap-0 w-[64px] relative">
                  <img
                    src="/img/user-1.svg"
                    alt="user1"
                    className="absolute left-0 rounded-full h-10 w-10"
                  />
                  <img
                    src="/img/user-2.svg"
                    alt="user1"
                    className="absolute left-[20%] rounded-full h-10 w-10"
                  />
                  <img
                    src="/img/user-3.svg"
                    alt="user1"
                    className="absolute left-[40%] rounded-full h-10 w-10"
                  />
                  <img
                    src="/img/user-4.svg"
                    alt="user1"
                    className="absolute left-[60%] rounded-full h-10 w-10"
                  />
                  <img
                    src="/img/user-5.svg"
                    alt="user1"
                    className="absolute left-[80%] rounded-full h-10 w-10"
                  />
                </div>
                <img
                  src="/img/heart.svg"
                  alt="plus"
                  className="ml-10 mr-2 h-4 w-4"
                />
                <span className="text-white">33k Likes</span>
              </div>
            </div>

            <div className="w-full h-full z-10">
              <img
                className="w-full h-full"
                src="/img/eric-esma.svg"
                alt="eric-esma"
              />
            </div>
          </div>

          {/* top charts */}
          <div>
            <h4 className="text-white font-bold py-2 text-2xl">Top Charts</h4>

            <div className="flex flex-col gap-4 justify-center items-start">
              <Link href="/chart">
                <div className="cursor-pointer flex flex-row gap-4 items-center w-[500px] bg-[#1A1E1F] rounded-[20px] p-4">
                  <img
                    src="/img/album-cover-1.svg"
                    alt="1"
                    className="rounded-2xl h-full w-auto"
                  />

                  <div className="flex flex-col justify-center items-start w-full">
                    <h4 className="font-light text-white">Golden age of 80s</h4>
                    <p className="text-[rgba(255,255,255,0.5)] text-sm">
                      Sean swader
                    </p>
                    <label className="text-gray-400">2:34:45</label>
                  </div>

                  <div className="grid place-items-end min-w-fit pr-5">
                    <button className="rounded-full border-[1px] border-gray-600 p-2">
                      <img src="/img/heart-2.svg" alt="play" />
                    </button>
                  </div>
                </div>
              </Link>

              <Link href="/chart">
                <div className="cursor-pointer flex flex-row gap-4 items-center w-[500px] bg-[#1A1E1F] rounded-[20px] p-4">
                  <img
                    src="/img/album-cover-2.svg"
                    alt="1"
                    className="rounded-2xl h-full w-auto"
                  />

                  <div className="flex flex-col justify-center items-start w-full">
                    <h4 className="font-light text-white">Reggae "n" Blues</h4>
                    <p className="text-[rgba(255,255,255,0.5)] text-sm">
                      Dj YK Mule
                    </p>
                    <label className="text-gray-400">1:02:42</label>
                  </div>

                  <div className="grid place-items-end min-w-fit pr-5">
                    <button className="rounded-full border-[1px] border-gray-600 p-2">
                      <img src="/img/heart-2.svg" alt="play" />
                    </button>
                  </div>
                </div>
              </Link>

              <Link href="/chart">
                <div className="cursor-pointer flex flex-row gap-4 items-center w-[500px] bg-[#1A1E1F] rounded-[20px] p-4">
                  <img
                    src="/img/album-cover-3.svg"
                    alt="1"
                    className="rounded-2xl h-full w-auto"
                  />

                  <div className="flex flex-col justify-center items-start w-full">
                    <h4 className="font-light text-white">Tomorrow’s tunes</h4>
                    <p className="text-[rgba(255,255,255,0.5)] text-sm">
                      Obi Datti
                    </p>
                    <label className="text-gray-400">2:01:25</label>
                  </div>

                  <div className="grid place-items-end min-w-fit pr-5">
                    <button className="rounded-full border-[1px] border-gray-600 p-2">
                      <img src="/img/heart-2.svg" alt="play" />
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* new releases */}
        <section className="pt-10 w-full">
          <h4 className="text-white font-bold py-2 text-2xl">New Releases</h4>

          <div className="flex flex-row gap-4 justify-start items-center snap-x snap-mandatory w-full overflow-x-auto scrollbar-hide">
            {new_releases.map((release, index) => (
              <div
                key={index}
                className="snap-start min-w-fit flex flex-col items-start gap-2"
              >
                <img src={release.image} alt="1" className="rounded-2xl" />
                <p className="text-white font-extralight">{release.title}</p>
                <p className="text-[rgba(255,255,255,0.5)] text-sm">
                  {release.artist}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* popular in your area */}
        <section className="pt-10 w-full">
          <h4 className="text-white font-bold py-2 text-2xl">
            Popular in your area
          </h4>

          <div className="flex flex-row gap-4 justify-start items-center snap-x snap-mandatory w-full overflow-x-auto scrollbar-hide">
            {popular_in_your_area.map((release, index) => (
              <div
                key={index}
                className="snap-start min-w-fit flex flex-col items-start gap-2"
              >
                <img src={release.image} alt="1" className="rounded-2xl" />
                <p className="text-white font-extralight">{release.title}</p>
                <p className="text-[rgba(255,255,255,0.5)] text-sm">
                  {release.artist}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </BaseLayout>
  );
}

export default Index;
