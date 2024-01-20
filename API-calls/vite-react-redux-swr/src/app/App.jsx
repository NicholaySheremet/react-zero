import { useState } from "react";
import { Counter } from "../components/Counter";
import { ToDoList } from "../components/ToDoList";
import { ToDoListLoadingInfo } from "../components/ToDoListLoadingInfo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React + Redux</h1>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <hr />
      <h1>React-redux counter:</h1>
      <Counter />
      <hr />
      <h1>React-redux ToDo List:</h1>
      <ToDoList />
      <hr />
      <h1>TEST SWR</h1>
      <ToDoListLoadingInfo />
    </>
  );
}

export default App;
