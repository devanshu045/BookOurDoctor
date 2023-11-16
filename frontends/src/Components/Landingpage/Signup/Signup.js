import React from 'react'
import './Signup.css'
const Signup = () => {
  return (
    <div className="main-section">
      <div className="left-section">
        <div className="logo-name">
          <img className='signup-img' src="logo.png" alt="Logo" />
          <h1 className='signup-h1'>Company Name</h1>
          <h3 className='signup-h3'>Subtitle</h3>
        </div>
        <div className="info">
          <div className="info-item">
            <img className='signup-img-icon1' src="icon1.png" alt="Icon 1" />
            <h3>Info 1</h3>
          </div>
          <div className="info-item">
            <img className='signup-img-icon2' src="icon2.png" alt="Icon 2" />
            <h3 className='signup-h3'>Info 2</h3>
          </div>
        </div>
        <button className='signup-btn'>Click Me</button>
      </div>
      <div className="right-section">
        <img className='signup-img-dr' src="src\photo\drs-photo.png" />
      </div>
    </div>
  )
}

export default Signup