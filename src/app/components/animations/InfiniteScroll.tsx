import { memo, useRef, useEffect } from "react";

const InfiniteScroll = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const totalHeight = track.scrollHeight;
    const halfHeight = totalHeight / 2;

    const styleEl = document.createElement("style");
    styleEl.textContent = `
      @keyframes seamless-up {
        from { transform: translateY(0); }
        to   { transform: translateY(-${halfHeight}px); }
      }
    `;
    document.head.appendChild(styleEl);
    track.style.animation = "seamless-up 180s linear infinite";

    return () => {
      document.head.removeChild(styleEl);
    };
  }, []);

  const items = Array.from({ length: 20 }, (_, i) => i);

  return (
    <div
      className="absolute  ml-auto right-0  top-0 h-175 lg:h-180.5 overflow-hidden flex justify-center "
      style={{ width: "fit-content" }}
    >
      <div
        ref={trackRef}
        className="flex flex-col items-center gap-10"
        style={{ willChange: "transform" }}
      >
        {items.map((i) => (
          <h1
            key={i}
            className="text-2xl lg:text-7xl text-yellow-800/50 font-bold whitespace-nowrap"
            style={{
              writingMode: "vertical-rl",
              transform: "rotate(180deg)",
              whiteSpace: "nowrap",
            }}
          >
            A S T A R A B I C A
          </h1>
        ))}
      </div>
    </div>
  );
};

export default memo(InfiniteScroll);
