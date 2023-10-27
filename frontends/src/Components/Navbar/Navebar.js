import React from 'react'
import { Link } from 'react-router-dom';
import './Navebar.css';

const Navebar = () => {
  return (
    <nav className="navbar">
         <div className="navbar-logo">
         <img className='navbar-img' src="logo.png" alt="Logo" />
       </div>
       <div className="navbar-left">
         <button to="/">Home</button>
         <button to="/about">About</button>
         <button to="/services">Services</button>
         <button to="/portfolio">Portfolio</button>
         <button to="/contact">Contact</button>
       </div>
       <div className="navbar-right">
         <button to="/login">Login</button>
         <button to="/signup">Signup</button>
       </div>
    </nav>

  )
}

export default Navebar