import {useState,useEffect} from 'react';

function Stuff(){
    const [count, setCount]= useState(0);
    const [result,setResult]= useState(0);
    // function Update(){
        useEffect(()=>{
            setTimeout(() => {
                setResult((count)=> count*2 ); 
            }, 1000);
        
        },[count]);

        function Update(){
            setCount((c)=> c+1);
    }
    return(
        <div>
            <h1>I have upadted User {count} times!</h1>
             <button className='btn' onClick={Update}>+</button> 
        </div>
    );
}
export default Stuff;