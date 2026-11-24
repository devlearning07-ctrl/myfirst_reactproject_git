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
      {/* <h1>Counter Example</h1>
      <h2>Number Value: {counter}</h2>
      <button onClick={valueAdd}>Add Value {counter}</button>
      <br/>
      <br/>
      <button onClick={valueRemove}>Remove Value {counter} </button>
      <p>Foorter: {counter}</p> */}

      <div className="counter-container">
        <h1 className="counter-title">Counter Example</h1>

        <h2 className="counter-value">
          Number Value: <span>{counter}</span>
        </h2>

        <div className="counter-actions">
          <button className="counter-btn counter-btn--add" onClick={valueAdd}>
            Add Value {counter}
          </button>

          <button className="counter-btn counter-btn--remove" onClick={valueRemove}>
            Remove Value {counter}
          </button>
        </div>

        <footer className="counter-footer">
          Footer: {counter}
        </footer>
      </div>
    </>
  )
}

export default App
