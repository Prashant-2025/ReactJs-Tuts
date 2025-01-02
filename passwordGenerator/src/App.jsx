
import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*-_+=[]{}~`"
    for(let i=0; i<=length; i++){
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char)
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password])

  useEffect(()=>{
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
        <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-500'>
          <h1 className='text-lg text-white text-center font-bold py-5'>Password Generator</h1>
          <div className='flex shadow rounded-lg overflow-hidden mb-8'>
            <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='Password' ref={passwordRef} readOnly/>
            <button className='outline-none bg-blue-700 px-3 py-1 shrink-0 text-white' onClick={copyPasswordToClipboard}>Copy</button>
          </div>
          <div className='flex text-sm gap-x-4 pb-4'>
            <div className='flex items-center gap-x-1'>
              <input type="range" min={6} max={50} id='lengthInput' value={length} className='cursor-pointer' onChange={(e)=>{setLength(e.target.value)}}/>
              <label htmlFor='lengthInput'> Length: {length}</label>
            </div>
            <div className='flex-items-center gap-x-1'>
              <input type="checkbox" defaultChecked={numberAllowed} id="numberInput" onChange={()=>{setNumberAllowed((prev)=>!prev)}} />
              <label htmlFor='numberInput'>Numbers</label>
            </div>
            <div className='flex-items-center gap-x-1'>
              <input type="checkbox" defaultChecked={charAllowed} id="charInput" onChange={()=>{setCharAllowed((prev)=>!prev)}} />
              <label htmlFor='charInput'>Characters</label>
            </div>
          </div>
        </div>
    </>
  )
}

export default App
