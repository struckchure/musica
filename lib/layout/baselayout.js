/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";

import Collection from "../icons/collection";
import Home from "../icons/home";
import Logout from "../icons/logout";
import Profile from "../icons/profile";
import Radio from "../icons/radio";
import Video from "../icons/video";

function BaseLayout({ children, background, className }) {
  return (
    <div
      className={`flex flex-row gap-0 w-screen h-full bg-[#1D2123] ${
        className ? className : ""
      }`}
      style={{ background }}
    >
      <aside className="sticky top-0 h-screen w-fit py-4 px-2 flex flex-col gap-10 items-center">
        {/* logo */}
        <Link href="/">
          <Image
            src="/img/logo.svg"
            alt="logo"
            width={30}
            height={30}
            className="cursor-pointer"
          />
        </Link>

        {/* icon group 1 */}
        <div className="rounded-full h-fit py-2 px-1 bg-[#1A1E1F] flex flex-col gap-3">
          <Link href="/">
            <button className="p-0 m-0 w-12 h-10">
              <Home className="w-12 h-12" />
            </button>
          </Link>

          <Link href="/collections">
            <button className="p-0 m-0 w-12 h-10">
              <Collection className="w-8 h-8 mx-auto" />
            </button>
          </Link>

          <Link href="/">
            <button className="p-0 m-0 w-12 h-10">
              <Radio className="w-8 h-8 mx-auto" />
            </button>
          </Link>

          <Link href="/">
            <button className="p-0 m-0 w-12 h-10">
              <Video className="w-8 h-8 mx-auto" />
            </button>
          </Link>
        </div>

        {/* icon group 2 */}
        <div className="rounded-full h-fit py-2 px-1 bg-[#1A1E1F] flex flex-col gap-3">
          <Link href="/">
            <button className="p-0 m-0 w-12 h-10">
              <Profile className="w-8 h-8 mx-auto" />
            </button>
          </Link>

          <Link href="/">
            <button className="p-0 m-0 w-12 h-10">
              <Logout className="w-8 h-8 mx-auto" />
            </button>
          </Link>
        </div>
      </aside>

      <section className="h-full w-full mb-24">
        <nav className="h-[73px] w-full flex items-center justify-start">
          <div className="container mx-auto flex flex-row gap-4 items-center">
            <form>
              <div className="group flex flex-row gap-2 items-center justify-start rounded-full px-4 py-3">
                <Image
                  src="/img/search.svg"
                  alt="search"
                  width={20}
                  height={20}
                />
                <input
                  type="text"
                  placeholder="Search artists"
                  className="text-white bg-transparent outline-none"
                />
              </div>
            </form>
          </div>
        </nav>

        <section className="p-4">{children}</section>
      </section>

      {/* music player */}
      <section className="py-4 fixed left-0 bottom-0 w-full backdrop-blur-2xl">
        <div className="flex flex-row gap-4 justify-between items-center container mx-auto">
          <div className="flex flex-row justify-center items-center gap-4 w-fit">
            <img
              src="/img/player-cover.svg"
              alt="album"
              className="rounded-2xl w-20 h-20"
            />
            <div className="flex flex-col items-start justify-center w-fit">
              <p className="text-white w-full">Seasons in</p>
              <label className="text-[#B3B3B3] w-full">James</label>
            </div>
          </div>

          <div className="flex flex-col gap-4 justify-center items-center w-[60%]">
            <div className="flex items-center gap-4 w-fit">
              <button>
                <img src="/img/shuffle.svg" alt="shuffle" />
              </button>

              <button>
                <img src="/img/previous.svg" alt="previous" />
              </button>

              <button className="rounded-full p-4 bg-yellow-300">
                <img src="/img/play.svg" alt="play" />
              </button>

              <button>
                <img src="/img/next.svg" alt="next" />
              </button>

              <button>
                <img src="/img/repeat.svg" alt="repeat" />
              </button>
            </div>

            {/* seeker */}
            <div className="flex flex-row gap-4 items-center w-full">
              <input type="range" className="w-full" />
            </div>
          </div>

          {/* volume */}
          <div className="flex flex-row gap-4 items-center justify-center w-[15%]">
            <button>
              <img src="/img/volume.svg" alt="volume" />
            </button>
            <input type="range" className="w-full" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default BaseLayout;
