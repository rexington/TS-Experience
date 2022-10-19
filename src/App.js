import React from "react";
import "./App.css";
import { Global, css } from "@emotion/react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Liveboard from "./pages/Liveboard";
import Search from "./pages/Search";
import FreeTrial from "./pages/FreeTrial";
import "./fonts/bbrollermonoprotx-regular.otf";

const GlobalStyles = css`
  //@import url("https://fonts.googleapis.com/css?family=Dancing+Script&display=swap");

  @font-face {
    font-family: "BBRoller";
    src: local("BBRoller"),
      url("./fonts/bbrollermonoprotx-regular.otf") format("otf");
  }

  * {
    text-align: center;
  }
`;

function App() {
  return (
    <Router>
      <Global styles={GlobalStyles} />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/liveboard" component={Liveboard} />
        <Route path="/search" component={Search} />
        <Route path="/freetrial" component={FreeTrial} />
      </Switch>
    </Router>
  );
}

export default App;
