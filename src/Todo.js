import React, { useEffect, useState } from 'react'

function Todo() {
    const [data, setData] = useState([]);
    useEffect(() => {

        // todo api rendering
        // fetch("https://jsonplaceholder.typicode.com/todos")

        // photos api rendering
        // fetch("https://jsonplaceholder.typicode.com/photos?_limit=20")

        // posts api rendering
        fetch("https://jsonplaceholder.typicode.com/posts")


            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);
    return (
        <div style={{margin:"20",backgroundColor:"tomato",color:"white"}}>
            {data.map((item) => (
                <>

                    <div>key= {item.id}</div>

        
               {/* <img src={item.thumbnailUrl} /> */}
                    <h1>Title: {item.title}</h1>
                    <p>post Body: {item.body}</p>
                </>

            ))}
            {/* {data.map((item,index) =>
                
                // <h4> Title {index}:{item.title}</h4>
            
            )} */}
        </div>
    )
}

export default Todo