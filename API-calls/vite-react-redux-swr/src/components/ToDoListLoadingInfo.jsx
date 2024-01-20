import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export function ToDoListLoadingInfo() {
  const {
    data: { data = [] } = {},
    error,
    isLoading,
  } = useSWR(`http://localhost:3000/to-do`, fetcher);

  if (isLoading) {
    return <div>LOADING...</div>;
  }

  if (error) {
    return <div>ALARM! ERROR!</div>;
  }
  console.log("🚀 ~ ToDoListLoadingInfo ~ data:", data);
  return (
    <>
      <ul>
        {data.map(({ _id: id, label, finished }) => (
          <li key={id}>
            <p>label: {label}</p>
            <p>finished: {finished ? "+" : "-"}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
