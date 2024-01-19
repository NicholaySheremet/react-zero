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
import { DefaultButton, DefaultCard, BigSpinner } from "../shared/ui";

export function ToDoList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchToDoList());
    return () => {};
  }, [dispatch]);

  const list = useSelector(getToDoList);
  const loading = useSelector(getToDoListLoading);
  const error = useSelector(getToDoListError);

  return (
    <div>
      <DefaultCard header={"React-redux ToDo List"}>
        <DefaultButton
          onClick={() =>
            dispatch(
              fetchCreateToDo({
                data: {
                  label: `Label created on Client (${Date.now()})`,
                },
              }),
            )
          }
        >
          Add new element
        </DefaultButton>
        {error ? (
          <div>ALARM! ERROR!</div>
        ) : loading ? (
          <BigSpinner />
        ) : (
          <div>
            <ul>
              {list.map(({ _id: id, label, finished }) => (
                <li key={id}>
                  <DefaultCard header={label}>
                    <div className="my-2">
                      <p className="inline">Finished:</p>
                      <div className="ml-2 inline">
                        <DefaultButton
                          onClick={() =>
                            dispatch(
                              fetchUpdateToDo({
                                id,
                                data: {
                                  finished: !finished,
                                },
                              }),
                            )
                          }
                        >
                          {finished ? "+" : "-"}
                        </DefaultButton>
                      </div>
                    </div>
                    <DefaultButton
                      onClick={() => dispatch(fetchDeleteToDo({ id }))}
                    >
                      delete
                    </DefaultButton>
                  </DefaultCard>
                </li>
              ))}
            </ul>
          </div>
        )}
      </DefaultCard>
    </div>
  );
}
