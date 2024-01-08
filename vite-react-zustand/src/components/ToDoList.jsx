import ToDoElement from "./ToDoElement";

function ToDoList({ list = [] }) {
  return (
    <>
      {list.map(({ _id: id, label, finished }) => {
        return <ToDoElement key={id} label={label} finished={finished} />;
      })}
    </>
  );
}

export default ToDoList;
