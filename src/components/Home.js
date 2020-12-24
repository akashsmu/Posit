import React, { useState } from "react";
import BackgroundVideo from "../userContent/BackgroundVideo";
import ParallaxPage from "./InfoSection";
import { homeObjOne } from "./InfoSection/data";
import { ParallaxProvider } from "react-scroll-parallax";
import WindowSizeListener from "react-window-size-listener";
import ParallaxAlternate from "./Pages/ParallaxAlternate";
import IEEEContent from "./Pages/IEEEContent";

export default function Home() {
  const [width, setWidth] = useState();
  console.log(width);
  return (
    <div>
      <ParallaxProvider>
        <BackgroundVideo />
        <IEEEContent />
        <WindowSizeListener
          onResize={(windowSize) => {
            setWidth(windowSize.windowWidth);
          }}>
          {" "}
          {width >= "1280" ? <ParallaxPage /> : <ParallaxAlternate />}
        </WindowSizeListener>
      </ParallaxProvider>
    </div>
  );
}
