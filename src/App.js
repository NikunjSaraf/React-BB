import React, { Fragment } from "react";
import "./App.css";
import Episode from "./components/episode/Episode";
import NavBar from "./components/ui/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/characters/Home";
import Death from "./components/deaths/Death";
import Quotes from "./components/quotes/Quotes";
function App() {
  return (
    <Router>
      <Fragment>
        <NavBar />
        <div className="container">
          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route exact={true} path="/episode" component={Episode} />
            <Route exact={true} path="/death" component={Death} />
            <Route exact={true} path="/quotes" component={Quotes} />
          </Switch>
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
