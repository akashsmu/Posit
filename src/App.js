import { React, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import PositConverter from "./components/Pages/PositConverter";
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
        <Route exact path="/projects" component={PositConverter}></Route>
        <Route></Route>
        <Route></Route>
      </Switch>
    </Router>
  );
}

export default App;
