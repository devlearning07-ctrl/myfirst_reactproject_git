import { useState } from 'react'

function App() {
  // let counter = 10
  let [counter, setCount] = useState(0)

  const valueAdd = ()=> {
    console.log("value Added", counter);  
    counter = counter +1; 
    setCount(counter);
  }
  const valueRemove = ()=> {
    console.log("value Removed", counter);  
    counter = counter -1; 
    setCount(counter);
  }  
  return (
    <>
      <h1>Counter Example</h1>
      <h2>Number Value: {counter}</h2>
      <button onClick={valueAdd}>Add Value {counter}</button>
      <br/>
      <br/>
      <br/> 
      <button onClick={valueRemove}>Remove Value {counter} </button>
      <p>Foorter: {counter}</p>
    </>
  )
}

export default App
