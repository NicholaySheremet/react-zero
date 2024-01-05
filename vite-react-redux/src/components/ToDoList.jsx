import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  deleteTodo,
  fetchToDoList,
  getToDoList,
  getToDoListError,
  getToDoListLoading,
  handleToDoFinished,
} from "../app/store/reducers/toDoListReducer";

export function ToDoList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchToDoList());
    return () => {};
  }, []);

  const list = useSelector(getToDoList);
  const loading = useSelector(getToDoListLoading);
  const error = useSelector(getToDoListError);

  console.log(list, loading, error);

  if (loading) {
    return <div>LOADING...</div>;
  }

  if (error) {
    return <div>ALARM! ERROR!</div>;
  }

  return (
    <div>
      <div>
        <button aria-label="add" onClick={() => dispatch(addTodo())}>
          Add new element
        </button>
      </div>
      <div>
        <ul>
          {list.map(({ _id: id, label, finished }) => (
            <li key={id}>
              <p>label: {label}</p>
              <p onClick={() => dispatch(handleToDoFinished({ id }))}>
                finished: {finished ? "+" : "-"}
              </p>
              <button
                aria-label="delete"
                onClick={() => dispatch(deleteTodo({ id }))}
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
