"use client";
import InfiniteScroll from "./components/animations/InfiniteScroll";
import Stats from "./components/page/Stats";
import Image from "next/image";
import herosImg from "../../assets/hero.png";
import Section2 from "./components/sections/home/Section2";

export default function Index() {
  return (
    <>
      <InfiniteScroll />

      {/* Section 1 */}
      <div className="w-full h-162.5 overflow-hidden flex relative ">
        {/* Background image mobile — behind text, opacity rendah */}
        <div className="absolute inset-0 md:hidden">
          <Image
            src={herosImg}
            fill
            className="object-cover object-center opacity-15"
            alt="Black series : Americano"
          />
        </div>

        {/* Hero text */}
        <div className="relative z-10 w-full flex flex-col p-8 md:p-15 gap-5">
          <h1 className="font-bold leading-tight w-full md:w-140 text-4xl sm:text-5xl md:text-7xl">
            Crafting moment of pure{" "}
            <span className="text-yellow-800"> coffee bliss </span>
          </h1>
          <p className="text-base sm:text-lg md:text-2xl w-full md:w-117.5">
            Bangunkan mood dan tingkatkan produktivitas kalian dengan segelas
            americano
          </p>
          <div className="flex flex-wrap gap-4 md:gap-10">
            <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-6 font-medium text-neutral-200 duration-500">
              <div className="translate-x-0 opacity-100 transition group-hover:-translate-x-[150%] group-hover:opacity-0">
                Go to Menu
              </div>
              <div className="absolute translate-x-[150%] opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                >
                  <path
                    d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </button>
            <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-white font-medium">
              <div className="inline-flex h-12 translate-y-0 items-center justify-center px-6 text-neutral-950 transition duration-500 group-hover:-translate-y-[150%]">
                Scroll down
              </div>
              <div className="absolute inline-flex h-12 w-full translate-y-full items-center justify-center text-neutral-50 transition duration-500 group-hover:translate-y-0">
                <span className="absolute h-full w-full translate-y-full skew-y-12 scale-y-0 bg-yellow-800 transition duration-500 group-hover:translate-y-0 group-hover:scale-150"></span>
                <span className="z-10">Hover me</span>
              </div>
            </button>
          </div>
          <Stats />
        </div>

        {/* Image — normal di desktop, hidden di mobile */}
        <div className="hidden lg:block w-full relative ">
          <Image
            src={herosImg}
            fill
            className="object-cover "
            alt="Black series : Americano"
          />
        </div>
      </div>
      {/* Section 2 */}
      <Section2 />
    </>
  );
}
