import ToDoInput from "../components/ToDoInput";
import ToDoList from "../components/ToDoList";

const TEST_TODO_LIST = [
  {
    _id: 1,
    label: "First element",
    finished: true,
  },
  {
    _id: 2,
    label: "Second element",
    finished: false,
  },
  {
    _id: 3,
    label: "Third element",
    finished: false,
  },
  {
    _id: 4,
    label: "Last element",
    finished: true,
  },
];

function ToDoWidget() {
  return (
    <>
      <ToDoInput />
      <ToDoList list={TEST_TODO_LIST} />
    </>
  );
}

export default ToDoWidget;
