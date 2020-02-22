import React from "react";

const Contact = () => {
  return (
    <div className="ui main container">
      <div className="hero-text">
        <h1 id="contact-header">Contact me</h1>
        
        <div className="item">
          
          <a
            className="ui primary button"
            href="mailto:mail@mail.com"
            subject="what is this"
          >
            Send me an email
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
