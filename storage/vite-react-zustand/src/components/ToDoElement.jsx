function ToDoElement({ label = "No labeled", finished = false }) {
  return (
    <div
      style={{
        display: "block",
        width: "500px",
        borderStyle: "solid",
        borderWidth: "1px",
        borderColor: "black",
        marginBottom: '1rem',
      }}
    >
      <div>Label: {label}</div>
      <div>Finished: {finished ? "+" : "-"}</div>
    </div>
  );
}

export default ToDoElement;
