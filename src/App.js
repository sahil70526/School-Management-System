import React from 'react'
import Home from '../src/navbar/Home.js';
import About from '../src/navbar/About';
import Department from '../src/navbar/Department.js';
import Contact from '../src/navbar/ContactUs';
import College from './images/bg.png';




function App() {
  return (
  <>
  
  
    <div style={{backgroundColor:"#FFE1E1",margin:"5px"}}>
    <div style={{backgroundColor:"#FB2576", display: "flex" ,padding:"20px", color:"white"}}>
   <div><Home /></div>
      <div  style={{marginLeft:"500px"}}><About /></div>
      <div style={{marginLeft:"100px"}}><Department /></div>
      <div style={{marginLeft:"100px"}}><Contact /></div>

    </div>
    <div>
    <img src={College} alt="College Image" style={{height:"550px",width:"100%",margin:"0%",padding:"0%"}}/>
       
    </div>
    </div>
   
    
  </>
   
  )
}

export default App