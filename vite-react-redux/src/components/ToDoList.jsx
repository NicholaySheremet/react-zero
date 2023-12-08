import { useSelector, useDispatch } from "react-redux";
import {
  addTodo,
  deleteTodo,
  handleToDoFinished,
  getToDoList,
} from "../store/reducers/toDoListReducer";

export function ToDoList() {
  const list = useSelector(getToDoList);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button aria-label="add" onClick={() => dispatch(addTodo())}>
          Add new element
        </button>
      </div>
      <div>
        <ul>
          {list.map(({ id, label, finished }) => (
            <li key={id}>
              <p>label: {label}</p>
              <p>finished: {finished ? "+" : "-"}</p>
              <button
                aria-label="delete"
                onClick={() => dispatch(deleteTodo({id}))}
              >
                delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
