import { React, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Pages/Footer";
import PositConverter from "./components/Pages/PositConverter";
import Resources from "./components/Pages/Resources";
import NavbarFinal from "./Navbar";

function App() {
  const [navbarOpen, setnavbarOpen] = useState(false);
  const handleNavbar = () => {
    setnavbarOpen(!navbarOpen);
  };

  return (
    <Router>
      <NavbarFinal navbarOpen={navbarOpen} handleNavbar={handleNavbar} />

      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/projects" component={PositConverter}></Route>
        <Route path="/resources" component={Resources}></Route>
      </Switch>

      <Footer page={"convert"} />
    </Router>
  );
}

export default App;
