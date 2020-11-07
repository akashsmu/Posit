import { React, useState } from "react";
import Section from "./components/Section";
import NavbarFinal from "./Navbar";
import BackgroundVideo from "./userContent/BackgroundVideo";

function App() {
  const [navbarOpen, setnavbarOpen] = useState(false);

  const handleNavbar = () => {
    setnavbarOpen(!navbarOpen);
  };
  return (
    <div className="App">
      <NavbarFinal navbarOpen={navbarOpen} handleNavbar={handleNavbar} />
      <BackgroundVideo />
      <Section />
    </div>
  );
}

export default App;
