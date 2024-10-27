import React, {useState} from 'react'

const App = () => {
  const [counter, setCounter] = useState(0);

  const INCREMENT_AMOUNT = 25;
  const RESET_AMOUNT = 0;
  
  function increment() {
    setCounter(counter +1);
  }

  function decrement() {
    setCounter(counter -1);
  }

  function incrementByAmount() {
    setCounter(counter + INCREMENT_AMOUNT);
  }
  
  function resetAmount() {
    setCounter(RESET_AMOUNT);
  }

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={increment}>Öka räknaren</button>
      <button onClick={decrement}>Minska räknaren</button>
      <button onClick={incrementByAmount}>Öka räknaren med {INCREMENT_AMOUNT}</button>
      <button onClick={resetAmount}>Resetta Knappen</button>
    </div>
  )
}

export default App