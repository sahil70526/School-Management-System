import React,{useState} from 'react'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import { Button } from 'react-bootstrap'
import Login from './Login'
import Main from './Main'


function App() {
  const [log,setLog]=useState(false)
  function update(){
    setLog(true)
  }
  return (
  <>
  {
    log==true? 
    <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main />}/>
    </Routes>
    </BrowserRouter>
  </div>:<h1 style={{marginLeft:"500px"}}>Please login first</h1>
  }
   <BrowserRouter>
    <Routes>
      <Route path='/' element={  <Login/>}/>
    </Routes>
    </BrowserRouter>
   <div style={{margin:"3%",marginLeft:"550px"}} >
     <Button  variant="secondary" size="lg" onClick={update}> Render to main page.</Button>
    </div>
  
  
  </>
  
  

    
  
   
  )
}

export default App