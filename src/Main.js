import React from 'react';
import { Link } from 'react-router-dom'
import Home from '../src/navbar/Home.js';
import About from '../src/navbar/About';
import Department from '../src/navbar/Department.js';
import Contact from '../src/navbar/ContactUs';
import College from './images/image2.jpg';

function Main() {
  return (
    <div style={{ margin: "5px" }}>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', backgroundColor: 'pink', color: 'white' }}>
        <Link style={{color:'white',fontSize:'medium'}}><Home /></Link>
        <Link style={{color:'white',fontSize:'medium'}}><About /></Link>
        <Link style={{color:'white',fontSize:'medium'}}><Department /></Link>
        <Link style={{color:'white',fontSize:'medium'}}><Contact /></Link>
      </div>
      <div>
        <img src={College} alt="College Image" style={{ height: "550px", width: "100%", margin: "0%", padding: "0%" }} />

      </div>
    </div>
  )
}

export default Main