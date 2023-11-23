import React, { useState, useRef } from "react";
import "./App.css";
import ListWithHandlers from "./components/list-with-handlers";
import ListWithFetchHandlers from "./components/list-with-fetch-handlers";

const defaultListDataState = {
  isLoading: false,
  data: undefined,
};

function App() {
  const [stateCounter, stateCounterUp] = useState(0);
  const refCounter = useRef(0);
  const [{ isLoading, data } = {}, setData] = useState(defaultListDataState);

  function getListData() {
    setData({
      ...defaultListDataState,
      isLoading: true,
    });

    return setTimeout(() => {
      setData({
        ...defaultListDataState,
        data: [1, 2, 3, 4, 5].slice(0, (Math.random() * 5) % 5),
      });
    }, 2000);
  }

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
      <hr />
      Click to take list data:<button onClick={getListData}>get list</button>
      <hr />
      List with global handler:
      <ListWithHandlers isLoading={isLoading} data={data} />
      <hr />
      List with composed handlers:
      <ListWithFetchHandlers isLoading={isLoading} data={data} />
    </div>
  );
}

export default App;
