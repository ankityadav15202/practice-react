import './App.css';
import React from 'react';
import { useState } from 'react';
function App() {
  
  const [color, setColor] = useState("")
  const p = function(char="hey"){
    document.querySelector('#btnText').innerHTML=char
  }
  // setColor(color)
  return (
  <body style={{backgroundColor: color}}>
    
  <div className='div' id='div' >
    <div className='colorBtn' id='colorBtn' >
      {/* <button onClick={setColor("White")}>White</button> */}
      <button onClick={()=>setColor("green")} style={{backgroundColor: 'green', borderColor: color}}>Green</button>
      <button onClick={()=> setColor("yellow")} style={{backgroundColor: 'Yellow', borderColor: color}}>Yellow</button>
      <button onClick={()=> setColor('red')} style={{backgroundColor: 'Red', borderColor: color}}>Red</button>
      <button onClick={()=>setColor('grey')} style={{backgroundColor: 'Gray', borderColor: color}}>Gray</button>
      <button onClick={()=>setColor('pink')} style={{backgroundColor: 'Pink', borderColor: color}}>Pink</button>
      <button onClick={()=>setColor('')}>Default</button>
      <button id='btnText' onClick={()=> p("Changed")}>Click to change</button>
    </div>
  </div>
  </body>

  )
}

export default App;
