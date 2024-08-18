import { useState } from "react";

function Counter() {
    const [counter, setCounter] = useState(0)
    const addValue = () => {
      setCounter(counter + 1);
      console.log("Clicked", counter);
    }
    const removeValue = () => {
      if(counter===0){
        return
      }
      setCounter(counter - 1);
      console.log("Clicked", counter);
    }
  
    return (
      <>
        <div className="counter-section">
          <h1 className="text-4xl m-5">Counter: {counter}</h1>
          <button className='btn' onClick={addValue}>Add Value</button>
          <button className='btn' onClick={removeValue}>Remove Value</button>
        </div>
      </>
    )
}

export default Counter