import React from "react";
import './Searchsection.css'

const Searchsection = () => {
  return (
    <>
      <div className="Search-cart">
        <div className="Search-heading">
          <h1 className="Search-h1">Your Home For Health</h1>
        </div>
        <div className="Search-inputs">
          <h2>Find and book</h2>
          <div className="Search-input">
            <input type="text" placeholder="Enter location" />
            <input type="text" placeholder="Search doctors, clinics, hospitals etc" />
            <button className="Search-button">Search</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Searchsection;
