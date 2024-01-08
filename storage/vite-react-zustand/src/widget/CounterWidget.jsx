import {
  useCounter,
  useCounterActions,
} from "../shared/storage/zustand-storage";

function CounterWidget() {
  const counter = useCounter();
  const { increase, removeAll } = useCounterActions();

  return (
    <>
      <p>Current counter: {counter}</p>
      <button onClick={() => increase()}>+ 1</button>
      <button onClick={() => removeAll(0)}>= 0</button>
    </>
  );
}

export default CounterWidget;
