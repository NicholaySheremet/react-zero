import { useState } from "react";
import "./App.css";
import FiltredList from "./components/FiltredList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div className="card">
        <FiltredList />
      </div>
    </>
  );
}

export default App;
