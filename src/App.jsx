import React, {useState} from 'react'

const App = () => {
  const [counter, setCounter] = useState(0);

  const INCREMENT_AMOUNT = 45;
  const RESET_AMOUNT = 0;
  
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
    setCounter(RESET_AMOUNT);
  }

  return (
    <div>
      <h1 className="counter">{counter}</h1>
      <h2 className="buttonContainer">
      <button className="button" onClick={increment}>Öka räknaren</button>
      <button className="button" onClick={decrement}>Minska räknaren</button>
      <button className="button" onClick={incrementByAmount}>Öka räknaren med {INCREMENT_AMOUNT}</button>
      <button className="button" onClick={resetAmount}>Resetta Knappen</button>
      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="button" target="_blank" rel="noopener noreferrer">Generate random number</a>
      </h2>
    </div>
  )
}

export default App