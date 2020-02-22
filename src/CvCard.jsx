import React from "react";

const CvCard = ({ cv }) => {
  return (
    <>
      <div className="ui card">
        <div className="image">
          <img src={cv.image} />
        </div>
        <div className="content">
          <h3 className="ui header">{cv.name}</h3>
          <div className="description">{cv.description}</div>
        </div>
      </div>
    </>
  );
};

export default CvCard;
