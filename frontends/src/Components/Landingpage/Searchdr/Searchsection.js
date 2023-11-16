import React from 'react'
import "./Searchsection.css"

const Searchsection = () => {
  return (
    <div className="search-container">
    <div className="search-box">
      <img src="location-logo.png" alt="Location Logo" />
      <input type="text" placeholder="Enter Location" />
    </div>
    <div className="search-box">
      <img src="search-logo.png" alt="Search Logo" />
      <input type="text" placeholder="Enter Search Item" />
    </div>
    <div className="btns-search">
      <button >Search</button>
    </div>
  </div>
  )
}

export default Searchsection;