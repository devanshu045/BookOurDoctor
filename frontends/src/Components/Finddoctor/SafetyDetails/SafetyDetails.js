import React from "react";
import './SafetyDetail.css'

const SafetyDetails = () => {
  return (
    <div>
      <div className="Safety-section">
        <div className="Safety-upper">

       
        <div className="Safety-leftside">
          <h1 className="Safety-heading">
            Safety of your data is our top priority.
          </h1>
          <ul className="Safety-items">
            <li className="Safety-item">Multi-level security checks</li>
            <li className="Safety-item">Multiple data backups</li>
            <li className="Safety-item">Stringent data privacy policies</li>
          </ul>
          <button className="Safety-btn">Read More</button>
        </div>
        <div className="Safety-rightside">
          <img src="" alt="" />
        </div>
        </div>
        <div className="Safety-features">
          <div className="Safety-cart">
            <img src="" alt="" />
            <h3>256-bit encryption</h3>
          </div>
          <div className="Safety-cart">
            <img src="" alt="" />
            <h3>ISO 27001 certified</h3>
          </div>
          <div className="Safety-cart">
            <img src="" alt="" />
            <h3>HIPAA compliant data centers</h3>
          </div>
        </div>
        <div className="Safety-cart">
          <img src="" alt="" />
          <h3>DSCI member</h3>
        </div>
      </div>
    </div>
  );
};

export default SafetyDetails;
