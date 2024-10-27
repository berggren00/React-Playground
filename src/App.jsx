import React, {useState} from 'react'

const App = () => {
  const [counter, setCounter] = useState(0);

  const INCREMENT_AMOUNT = 45;
  
  function increment() {
    setCounter(counter +1);
  }

  function decrement() {
    if (counter > 0) {
    setCounter(counter -1);
    }
  }

  function incrementByAmount() {
    setCounter(counter + INCREMENT_AMOUNT);
  }
  
  function resetAmount() {
    setCounter(0);
  }

  return (
    <div>
      <h1 className="counter">{counter}</h1>
      <h2 className="buttonContainer">
      <button className="button" onClick={increment}>Increase Counter</button>
      <button className="button" onClick={decrement}>Decrease counter</button>
      <button className="button" onClick={incrementByAmount}>Increase counter by {INCREMENT_AMOUNT}</button>
      <button className="button" onClick={resetAmount}>Reset counter</button>
      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="button" target="_blank" rel="noopener noreferrer">Generate random number</a>
      </h2>
    </div>
  )
}

export default App