import React from "react";
import { Menu, Segment, Image, Grid } from 'semantic-ui-react'

const Hello = () => {
  return (
    <div className="ui main container">
      <div className="hero-text">
        <h1 id="name">Philip Gaunitz</h1>
        <h4>Junior fullstack web developer| Tech enthusiast </h4>
        <div className="item">
          <a
            className="ui button"
            onClick={event => (window.location.href = "/About")}
          >
            Read More
          </a>
          <a
            className="ui primary button"
            onClick={event => (window.location.href = "/Contact")}
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hello;
