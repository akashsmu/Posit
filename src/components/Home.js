import React, { useState } from "react";
import NavbarFinal from "../Navbar";
import BackgroundVideo from "../userContent/BackgroundVideo";
import InfoSection from "./InfoSection";
import { homeObjOne } from "./InfoSection/data";

export default function Home() {
  const [navbarOpen, setnavbarOpen] = useState(false);

  const handleNavbar = () => {
    setnavbarOpen(!navbarOpen);
  };
  return (
    <>
      <NavbarFinal navbarOpen={navbarOpen} handleNavbar={handleNavbar} />
      <BackgroundVideo />
      <InfoSection {...homeObjOne} />
    </>
  );
}
