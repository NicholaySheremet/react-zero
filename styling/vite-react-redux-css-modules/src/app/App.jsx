import { useState } from "react";
import { Counter } from "../components/Counter";
import { ToDoList } from "../components/ToDoList";

import styles from './App.module.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className={styles.test}>Vite + React + Redux</h1>
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
