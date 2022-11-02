import React,{useState} from 'react'

function Contact() {
  const [contact,setContact]=useState(["Contact Us"]);
  const person=["abc@.com","hdg#.com","fgfj%.com"];
  function update(){
    const item=person.map((e)=>
    <ul>
      <li>{e}</li>
    </ul>);
    setContact(item);
  }
  return (
    <div>
      <h1 onClick={update}>{contact}</h1>
    </div>
  )
}

export default Contact