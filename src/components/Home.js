import React, { useState } from "react";
import BackgroundVideo from "../userContent/BackgroundVideo";
import ParallaxPage from "./InfoSection";
import { homeObjOne } from "./InfoSection/data";
import { ParallaxProvider } from "react-scroll-parallax";

export default function Home() {
  return (
    <div>
      <ParallaxProvider>
        <BackgroundVideo />
        <ParallaxPage />
      </ParallaxProvider>
    </div>
  );
}
