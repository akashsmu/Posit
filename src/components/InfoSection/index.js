import React from "react";
import ParallaxPage from "./ParallaxBg";
// import Image1 from "./float1.jpg";
import Image2 from "./hardware.jpg";

function FinalHome() {
  return (
    <div style={{ backgroundColor: "#c2c2d6" }}>
      <ParallaxPage
        Image={Image2}
        alt={"Float"}
        Color={"white"}
        topOff={"-450px"}
        bottomOff={"-700px"}
      />
    </div>
  );
}

export default FinalHome;
