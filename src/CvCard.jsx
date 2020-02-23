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
          <h4 className="ui sub header">{cv.place}</h4>
          <div className="meta">
            <span className="date">{cv.date}</span>
          </div>
          <div className="description">{cv.description}</div>
          <h4 className="ui sub header">{cv.place2}</h4>
          <div className="meta">
            <span className="date">{cv.date2}</span>
          </div>
          <div className="description">{cv.description2}</div>
          <h4 className="ui sub header">{cv.place3}</h4>
          <div className="meta">
            <span className="date">{cv.date3}</span>
          </div>
          <div className="description">{cv.description3}</div>
        </div>
      </div>
    </>
  );
};

export default CvCard;
