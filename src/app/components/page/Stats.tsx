import { memo } from "react";
import CountUp from "react-countup";

const Stats = () => {
  return (
    <div className="flex gap-8 md:gap-15 items-center mt-5">
      <div className="flex flex-col items-center">
        <div className="flex">
          <CountUp
            start={0}
            end={30}
            duration={8}
            delay={1}
            className="font-bold text-xl md:text-4xl"
          />
          <h1 className="font-bold text-xl md:text-4xl">+</h1>
        </div>
        <p className="text-base md:text-xl">Coffe items</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex">
          <CountUp
            start={0}
            end={30}
            duration={8}
            delay={1}
            className="font-bold text-xl md:text-4xl"
          />
          <h1 className="font-bold text-xl md:text-4xl">k+</h1>
        </div>
        <p className="text-base md:text-xl">Happy customers</p>
      </div>
    </div>
  );
};

export default memo(Stats);
