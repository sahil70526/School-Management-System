import React, { useState } from 'react'


function Home() {
    const [content,setContent]=useState("Home");
   function update(){
    setContent("Welcome to Ever Green High school")
   }

  return (
    <div>
    <h1 onClick={update}>{content}</h1>
   
</div>
  )
}

export default Home;