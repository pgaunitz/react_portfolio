import React from "react";
import ReactDOM from "react-dom";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Hello from "./Hello";
import Header from "./Header";
import Footer from "./Footer";
import Projects from "./Projects";
import About from "./About";

import Particles from "react-particles-js";
import { particlesOptions } from "./data/particles";


const App = () => {
  return (
    <>
      <Particles
        style={{ zIndex: -1, position: "absolute", background: 'url("./src/images/norrsken.jpg")', BackgroundSize: 'cover', backgroundPosition: '50% 50%'}}
        params={particlesOptions}
      />
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Hello}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/projects" component={Projects}></Route>
        </Switch>
        <Footer />
      </div>
    </>
  );
};

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("app")
);
