import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchToDoList,
  fetchCreateToDo,
  fetchUpdateToDo,
  fetchDeleteToDo,
  getToDoList,
  getToDoListError,
  getToDoListLoading,
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

  if (loading) {
    return <div>LOADING...</div>;
  }

  if (error) {
    return <div>ALARM! ERROR!</div>;
  }

  return (
    <div>
      <div>
        <button
          aria-label="add"
          onClick={() =>
            dispatch(
              fetchCreateToDo({
                data: {
                  label: `Label created on Client (${Date.now()})`,
                },
              })
            )
          }
        >
          Add new element
        </button>
      </div>
      <div>
        <ul>
          {list.map(({ _id: id, label, finished }) => (
            <li key={id}>
              <p>label: {label}</p>
              <p
                onClick={() =>
                  dispatch(
                    fetchUpdateToDo({
                      id,
                      data: {
                        finished: !finished,
                      },
                    })
                  )
                }
              >
                finished: {finished ? "+" : "-"}
              </p>
              <button
                aria-label="delete"
                onClick={() => dispatch(fetchDeleteToDo({ id }))}
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
