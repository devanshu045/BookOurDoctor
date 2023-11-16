import React from 'react'
import Fastbook from './Fastbook/Fastbook';
import Searchsection from './Searchdr/Searchsection';
import Signup from './Signup/Signup';
import Faclities from './Facilites/Facilities'
import Articelsection from './Articles/Articelsection';
import Reviewsection from './ReviewDownload/Reviewsection';
import Footer from './Footer/Footer';
import Navebar from '../Commancomponets/Navbar/Navebar';

const Indexlandingpage = () => {
  return (
    <div>
  <Navebar/>
  <Searchsection/>
  <Signup/>
  <Fastbook/>
  <Faclities/>
  <Articelsection/> 
  <Reviewsection/>
  <Footer/>


    </div>
  )
}

export default Indexlandingpage