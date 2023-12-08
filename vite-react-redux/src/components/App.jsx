import { useState } from "react";
import { Counter } from "./Counter";
import { ToDoList } from "./ToDoList";

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
    </>
  );
}

export default App;
