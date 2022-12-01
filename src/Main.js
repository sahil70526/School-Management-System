import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import Home from '../src/navbar/Home.js';
import About from '../src/navbar/About';
import Department from '../src/navbar/Department.js';
import Contact from '../src/navbar/ContactUs';
import College from './images/image2.jpg';

function Main() {

  // code for mouse hovering

  // const [isHovering, setIsHovering] = useState(false);
  // const handleMouseEnter = () => {
  //   setIsHovering(true);
  // };

  // const handleMouseLeave = () => {
  //   setIsHovering(false);
  // };


  return (
    <div style={{ margin: "5px" }}>
      <div style={{
        display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly',
        backgroundColor: 'pink',
      }} >
        <Link style={{ textDecoration: 'none',color: 'white' }}><Home /></Link>
        <Link style={{ textDecoration: 'none',color: 'white' }}><About /></Link>
        <Link style={{ textDecoration: 'none',color: 'white' }}><Department /></Link>
        <Link style={{ textDecoration: 'none',color: 'white' }}><Contact /></Link>
      </div>
      <div>
        <img src={College} alt="College Image" style={{ height: "550px", width: "100%", margin: "0%", padding: "0%" }} />

      </div>
    </div>
  )
}

export default Main