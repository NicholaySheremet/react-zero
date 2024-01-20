import { Button } from "@mui/material";
import { useState } from "react";
import { Counter } from "../components/Counter";
import { ToDoList } from "../components/ToDoList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React + Redux</h1>
      <div>
        <Button
          variant="contained"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </Button>
      </div>
      <hr />
      <Counter />
      <hr />
      <ToDoList />
    </>
  );
}

export default App;
