import { useState } from "react";
import { Counter } from "../components/Counter";
import { ToDoList } from "../components/ToDoList";
import styled from "styled-components";

function App() {
  const [count, setCount] = useState(0);
  const Wrapper = styled.div`
    padding: 3rem;
  `;

  const Title = styled.h1`
    font-size: 1.5em;
    color: #bf4f74;
  `;

  return (
    <>
      <Wrapper>
        <Title>Vite + React + Redux</Title>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </Wrapper>
      <hr />
      <Wrapper>
        <Title>React-redux counter:</Title>
        <Counter />
      </Wrapper>
      <hr />
      <Wrapper>
        <Title>React-redux ToDo List:</Title>
        <ToDoList />
      </Wrapper>
    </>
  );
}

export default App;
