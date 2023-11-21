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
         <Link to="/">Home</Link>
         <Link to="/FindDoctor">Find Doctor</Link>
         <Link to="/VideoCall">Video Call</Link>
         <Link to="/portfolio">Portfolio</Link>
         <Link to="/contact">Contact</Link>
       </div>
       <div className="navbar-right">
         <button to="/login">Login</button>
         <button to="/signup">Signup</button>
       </div>
    </nav>

  )
}

export default Navebar