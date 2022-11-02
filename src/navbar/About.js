import React,{useState} from 'react'

function About() {
  const [about,setAbout]=useState("About Us")
  function update(){
    setAbout("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam")

  }
  return (
    <div>
<h1 onClick={update}>{about}</h1>
    </div>
  )
}

export default About