import React, { useState } from 'react'

function Department() {
  const [num, setNum] = useState(["Department"]);
  const content = ["Student", "faculty", "Administration","Bsiness"];

  function item() {
    const items = content.map((e) => 
      <ul><li>{e}</li></ul>
    );

    setNum(items)
    console.log(items);
  }
  return (
    <div >

      <h1  onClick={item}>{num}</h1> 
    </div>
  )
}

export default Department