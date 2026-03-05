import { memo } from "react";
import InfineteScrollSec2 from "../../animations/InfineteScrollSec2";
import GoodVibesImage from "../../../../../assets/good-vibe.png";
import Image from "next/image";
import Blob from "./components/animations/Blob";

const Section2 = () => {
  return (
    <div className="bg-black text-white h-162.5 px-10 relative">
      <InfineteScrollSec2 />
      {/* Container content section 2 */}
      <div>
        {/* Image */}
        <div>
          <Image src={GoodVibesImage} alt="Next Image"></Image>
        </div>
        {/* Text */}
        <div></div>
      </div>
    </div>
  );
};

export default memo(Section2);
