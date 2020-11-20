import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import PositTools from "./components/PositTools";

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar></NavBar>
      </div>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/tools" component={PositTools}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
