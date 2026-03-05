import { memo } from "react";
import InfineteScrollSec2 from "../../animations/InfineteScrollSec2";
import GoodVibesImage from "../../../../../assets/good-vibe.png";
import Image from "next/image";
import Blob from "../../animations/Blob";

const Section2 = () => {
  return (
    <div className="bg-black text-white h-162.5 px-10 relative ">
      <InfineteScrollSec2 />
      {/* Container content section 2 */}
      <div>
        {/* Image */}
        <div className="border  h-162.5 relative">
          <Blob containerStyle="w-[560px] h-[560px] border" />

          <Image
            src={GoodVibesImage}
            alt="Next Image"
            className="absolute top-0"
          ></Image>
        </div>
        {/* Text */}
        <div></div>
      </div>
    </div>
  );
};

export default memo(Section2);
