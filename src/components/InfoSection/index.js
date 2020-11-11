import React from "react";
import ParallaxPage from "./ParallaxBg";
import Image1 from "./float1.jpg";
import Image2 from "./hardware.jpg";

function FinalHome() {
  return (
    <div style={{ backgroundColor: "#c2c2d6" }}>
      <ParallaxPage Image={Image1} alt={"Float"} Color={"white"} />
      <ParallaxPage Image={Image2} alt={"hardware"} />
    </div>
  );
}

export default FinalHome;
