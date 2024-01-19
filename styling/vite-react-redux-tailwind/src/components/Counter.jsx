import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  getCounterValue,
  increment,
} from "../app/store/reducers/counterReducer";
import { DefaultButton, DefaultCard } from "../shared/ui";

export function Counter() {
  const count = useSelector(getCounterValue);
  const dispatch = useDispatch();

  return (
    <>
      <DefaultCard header={"React-redux counter"}>
        <DefaultButton onClick={() => dispatch(decrement())}>-</DefaultButton>
        <span className="mx-2">{count}</span>
        <DefaultButton onClick={() => dispatch(increment())}>+</DefaultButton>
      </DefaultCard>
    </>
  );
}
