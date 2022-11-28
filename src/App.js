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
  // <>
  // {
  //   log==true?<Main/>:<h1 style={{marginLeft:"500px"}}>Please login first</h1>
  // }
  //  <Login/>
  //  <div style={{margin:"3%",marginLeft:"550px"}} >
  //    <Button  variant="secondary" size="lg" onClick={update}> Render to main page.</Button>
  //   </div>
  
  
  // </>
  
   
  <div>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Main />}/>
    {/* <Route path='/about' element={<About />}/>
    <Route path='/' element={<Department />}/>
    <Route path='/' element={<Contact />}/> */}
  </Routes>
  </BrowserRouter>
</div>

    
  
   
  )
}

export default App