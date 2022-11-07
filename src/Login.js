import React,{useState} from 'react'

function Login() {
  const [name,setName]=useState(null);
  const [user,setUser]=useState(false);
  const [pass,setPass]=useState(null)
  const [interest,setInterest]=useState("")
  const [terms,setTerms]=useState(false)
  function getFormData(e){
    e.preventDefault()
     
  }
  return (
    <div>
      
      {user &&(
       <>
        <h1>Hello {name}</h1>
        <h2>Your Password is {pass}</h2>
        <h3>You have choosed the {interest}</h3>
        {
          // terms &&(
          //   <h4>You agreed to terms</h4>
          // )
          terms ?<h4>You agreed to terms</h4>:<h4>Please agree to terms and conditions</h4>
        }
       </>
      )}
       {/* {
        user?null:<h1>Hello {name}</h1>
       } */}
        <form onSubmit={getFormData}>
          <input type="text" placeholder='Enter Username' onChange={(v)=>setName(v.target.value)}/> 
          <input type="password" placeholder='Enter Password' onChange={(f)=>setPass(f.target.value)}></input><br/> <br/>
          <select onChange={(g)=>setInterest(g.target.value)}>
            <option>Select Your faculity!</option>
            <option>Engineering</option>
            <option>Medical</option>
            <option>Arts</option>
            <option>Science</option>
            <option>Comerce</option>
          </select>
          <input type="checkbox"  onChange={(r)=>setTerms(r.target.checked)}/><span> agree to terms and conditions</span>
          <br/> <br/>
          <button onClick={()=>setUser(true)}>Submit</button>
        </form>
    </div>
  )
}

export default Login