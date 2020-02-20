import React from "react";

const Hello = () => {
  return (
   
    <div className="ui main container">
      <div className="hero-text">
          <h1>Philip Gaunitz</h1>
          <h4>***empty*** | ***empty*** | ***empty***</h4>
          <div class="item"><a class="ui button" onClick={event =>  window.location.href='/About'}>Read More</a>
          <a class="ui primary button" href="mailto:test@testsson.se" subject="what is this">Send me an email</a></div>
        </div>
    </div>
    
  );
};

export default Hello; 