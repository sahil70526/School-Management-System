import React,{useState} from 'react'

function Register() {
  const [user,setUser]=useState("");

  return (
    <div style={{backgroundColor:"lightblue", margin:"50px", justifyContent:"center"}}>
      <form onSubmit={(e) =>{
        e.preventDefault();
        console.log(user);
      }} style={{height:"20px",width:"80px"}}>
        <lable> Register Here
        <input type="text" onChange={(e)=>setUser(e.target.value)}  value={user}></input>
        <button  >Submit</button>
        </lable>
        
      </form>
     
    </div>
    
    
  )
}

export default Register