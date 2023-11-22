import { useState, useRef } from "react";
import "./App.css";

function App() {
  const [stateCounter, stateCounterUp] = useState(0);
  const refCounter = useRef(0);

  function handleStateCount() {
    return stateCounterUp(stateCounter + 1);
  }

  function handleRefCount() {
    return (refCounter.current += 1);
  }

  console.log("App was rerender");

  return (
    <div className="App">
      <h1>React hooks</h1>
      <hr />
      <div>
        <h2>useState:</h2>
        <p>Counter: {stateCounter}</p>
        <button onClick={handleStateCount}>countUp</button>
      </div>
      <hr />
      <div>
        <h2>useRef:</h2>
        <p>Counter: {refCounter.current}</p>
        <button onClick={handleRefCount}>countUp</button>
        {refCounter.current > 5 && (
          <p>you clicked on ref counter 5 times and re-render page</p>
        )}
      </div>
    </div>
  );
}

export default App;
