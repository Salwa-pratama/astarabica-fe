import { memo } from "react";
import InfineteScrollSec2 from "../../animations/InfineteScrollSec2";
import GoodVibesImage from "../../../../../assets/good-vibe.png";
import Image from "next/image";
import Blob from "../../animations/Blob";
import bean from "../../../../../assets/bean.png";

const liText = [
  { text: "100% arabica signature beans" },
  { text: "18 hours cold brew" },
  { text: "No sweetener" },
  { text: "No alcohol" },
  { text: "2 cups / glass" },
  { text: "Food grade carbonated" },
];

const Section2 = () => {
  return (
    <div className="bg-black text-white h-162.5 p-10 relative overflow-hidden">
      <InfineteScrollSec2 />

      {/* ── MOBILE ONLY: Bottle as background (right side, half visible) ── */}
      {/* Hidden on md and above — desktop uses the left column layout instead */}
      <div className="pointer-events-none absolute inset-0 md:hidden">
        {/* Bottle image — anchored to right, vertically centered */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[55%] h-auto">
          <Image
            src={GoodVibesImage}
            alt=""
            aria-hidden
            className="w-full h-auto object-contain opacity-90"
            priority
          />
        </div>
        {/* Gradient overlay: black from left, fades right so text stays readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/10" />
        {/* Extra gradient top & bottom for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />
      </div>

      {/* ── Main Layout ── */}
      <div className="relative z-10 flex h-full items-center gap-4">
        {/* ── LEFT: Image (desktop only) ── */}
        <div
          className="hidden md:flex relative flex-shrink-0 items-center justify-center
                        w-[45%] lg:w-[48%] h-full"
        >
          <Blob
            containerStyle="
              md:w-[320px] md:h-[320px]
              lg:w-[380px] lg:h-[380px]
              xl:w-[420px] xl:h-[420px]
            "
          />
          <Image
            src={GoodVibesImage}
            alt="Good Vibes Cold Brew"
            className="
              absolute
              left-1/2 -translate-x-1/2
              top-1/2 -translate-y-[55%]
              md:w-[420px]
              lg:w-[500px]
              xl:w-[560px]
              object-contain
              drop-shadow-[0_30px_60px_rgba(0,0,0,0.8)]
            "
            priority
          />
        </div>

        {/* ── RIGHT: Text ── */}
        {/* On mobile: takes full width (bottle is behind as bg) */}
        {/* On desktop: takes remaining half */}
        <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 w-full md:flex-1 md:min-w-0">
          {/* Title */}
          <h1
            className="
            font-extrabold leading-tight tracking-tight w-fit
            border-2 border-white px-2 py-0.5 sm:px-3 sm:py-1
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl
          "
          >
            GOOD <span className="text-green-500">VIBES</span>
          </h1>

          {/* Description */}
          <p
            className="
            text-xs sm:text-sm md:text-base leading-relaxed
            max-w-[200px] sm:max-w-[240px] md:max-w-sm
          "
          >
            <span className="font-extrabold">
              Minuman Kopi Cold Brew Arabica
            </span>{" "}
            yang di proses selama 18 jam. Dipadukan dengan buah-buahan yang
            menyegarkan
          </p>

          {/* Feature list */}
          <ul className="flex flex-col gap-1 md:gap-1.5">
            {liText.map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <Image
                  src={bean}
                  width={14}
                  height={14}
                  alt="bullet"
                  className="flex-shrink-0 sm:w-4 sm:h-4"
                />
                <span className="text-xs sm:text-sm md:text-base text-gray-200">
                  {item.text}
                </span>
              </li>
            ))}
          </ul>

          {/* Price + CTA */}
          <div className="flex items-center gap-3 sm:gap-4 mt-1 sm:mt-2">
            <span className="text-sm sm:text-base md:text-lg lg:text-xl font-bold whitespace-nowrap">
              30k / bottle
            </span>
            <button
              className="
              group relative inline-flex items-center justify-center overflow-hidden
              rounded-md border border-white/30 bg-neutral-700
              h-9 sm:h-10 md:h-12
              px-4 sm:px-5 md:px-6
              text-xs sm:text-sm md:text-base
              font-medium text-neutral-200
              transition-transform hover:scale-105 active:scale-95
            "
            >
              <span className="relative z-10">Get in Touch</span>
              <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-700 group-hover:[transform:skew(-12deg)_translateX(100%)] transition-transform">
                <div className="relative h-full w-8 bg-white/20" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Section2);
