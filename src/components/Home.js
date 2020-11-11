import React, { useState } from "react";
import NavbarFinal from "../Navbar";
import BackgroundVideo from "../userContent/BackgroundVideo";
import ParallaxPage from "./InfoSection";
import { homeObjOne } from "./InfoSection/data";
import { ParallaxProvider } from "react-scroll-parallax";

export default function Home() {
  const [navbarOpen, setnavbarOpen] = useState(false);
  const handleNavbar = () => {
    setnavbarOpen(!navbarOpen);
  };

  return (
    <ParallaxProvider>
      <NavbarFinal navbarOpen={navbarOpen} handleNavbar={handleNavbar} />
      <BackgroundVideo />
      <ParallaxPage />
    </ParallaxProvider>
  );
}
