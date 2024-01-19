import { useState } from "react";
import { Counter } from "../components/Counter";
import { ToDoList } from "../components/ToDoList";
import { DefaultButton, DefaultCard } from "../shared/ui";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-gray-100">
        <DefaultCard header={"Base counter with hook"}>
          <p className="mb-2 block font-sans text-base font-light leading-relaxed text-inherit antialiased">
            count is {count}
          </p>
          <DefaultButton onClick={() => setCount((count) => count + 1)}>
            count up
          </DefaultButton>
        </DefaultCard>
        <Counter />
        <ToDoList />
      </div>
    </>
  );
}

export default App;
