import React from "react";
import { UndrawDesignerLife } from "react-undraw-illustrations";
import UndrawPhoto from "react-undraw-illustrations/lib/components/UndrawPhoto/UndrawPhoto";

const About = () => {
  return (
    <div className="ui main container">
      <div className="ui stackable two column grid">
        <div className="column">
          <UndrawPhoto />
        </div>
        <div className="column">
          <h1 className="ui header" >About Me</h1>
          <p>
            Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident
            corporis fuga saepe distinctio ipsam? Et quos harum excepturi
            dolorum molestias?
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
