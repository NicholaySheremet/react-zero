import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  getCounterValue,
} from "../app/store/reducers/counterReducer";

export function Counter() {
  const count = useSelector(getCounterValue);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span>{count}</span>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
    </div>
  );
}
