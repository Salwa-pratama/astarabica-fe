import { memo } from "react";
import InfineteScrollSec2 from "../../animations/InfineteScrollSec2";

const Section2 = () => {
  return (
    <div className="bg-black text-white h-162.5 px-10 relative">
      <InfineteScrollSec2 />
      <h2>Section2</h2>
    </div>
  );
};

export default memo(Section2);
