import React from "react";
import './/BookVideocall.css'

const BookVideocall = () => {
  return (
    <div>
      <div className="Book-section">
        <div className="Book-left">
          <h1 className="Book-heading">Skip the Travel !</h1>
          <h1 className="Book-heading">Take Online Doctor Consultation</h1>
          <h3 className="Book-rates">
            Private consultation + Audio call . Starts At just 199
          </h3>
          <div className="Book-Dr-images">
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <p>+109 Doctors are Online</p>
          </div>
          <button className="Book-btn">Consult Now</button>
        </div>
        <div className="Book-right">
          <img src="" alt="" className="Book-right-img" />
        </div>
      </div>
    </div>
  );
};

export default BookVideocall;
