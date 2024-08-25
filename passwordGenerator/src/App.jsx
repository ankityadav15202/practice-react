import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {

  const [length, setLength] = useState(8)
  const [numberalloweed, setNumberallowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [Password, setPassword] = useState("")


  // ref hook
  let passwordReference = useRef(null)
  
  let copyPasswordToClipboard = ()=>{
    passwordReference.current?.select()
    window.navigator.clipboard.writeText(Password)
  }


  const passwordGenerator = useCallback(()=>{
    let pass = ""
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(numberalloweed) str+= "0123456789"
  if(charAllowed) str+= "!@#$%^&*(){}[]=+-_`~*/?"

  for(let i=1;i<=length;i++){
    let char = Math.floor(Math.random()*str.length)
    pass += str.charAt(char)
  }
  setPassword(pass)
  }, [length, numberalloweed, charAllowed])

  useEffect(()=>{passwordGenerator()},[length, numberalloweed, charAllowed, passwordGenerator])
  
  return (
    <>


      <div id='main'>
        <div>
          <input 
          type="text"
          value={Password}
          placeholder='Password' 
          readOnly 
          ref={passwordReference}
          />
          <button onClick={()=>{copyPasswordToClipboard()}}>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex item-center gap-x-1'>
            <input type="range" 
            min={6}
            max={50}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}}/>
            <label>Label : {length}</label>
          </div>
          <input
          type="checkbox"
          defaultChecked={numberalloweed}
          id='numberInput'
          onChange={(e)=>{
            setNumberallowed((prev)=>!prev)
          }}
          />
          <label htmlFor="">Numbers</label>
          <input
          type="checkbox"
          defaultChecked={charAllowed}
          id='charInput'
          onChange={(e)=>{
            setCharAllowed((prev)=>!prev)
          }}
          />
          <label htmlFor="">Characters</label>
        </div>
      </div>
    </>
  )
}

export default App
