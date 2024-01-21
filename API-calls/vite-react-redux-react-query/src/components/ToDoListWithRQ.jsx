import { useSelector } from "react-redux";
import {
  getToDoList,
  getToDoListError,
  getToDoListLoading,
} from "../app/store/reducers/toDoListReducer";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const API_URL = "http://localhost:3000/to-do";

const fetchToDoList = async () => {
  return fetch(API_URL)
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export function ToDoListWithRQ() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchToDoList,
  });
  console.log("🚀 ~ ToDoListWithRQ ~ query:", { isLoading, error, data });

  return (
    <>
      {error ? (
        "error"
      ) : isLoading ? (
        "isLoading"
      ) : (
        <ul>
          {(data?.data || []).map(({ _id: id, label, finished }) => (
            <li key={id}>
              <p>label: {label}</p>
              <p>finished: {finished ? "+" : "-"}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
