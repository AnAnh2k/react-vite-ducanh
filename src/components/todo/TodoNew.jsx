const TodoNew = (props) => {
  const { addNewTodo } = props;

  const handleOnchange = (name) => {
    console.log(">>> handleOnchage", name);
  };

  const handleClick = (data) => {
    addNewTodo(data);
  };
  return (
    <>
      <div className="todo-new">
        <input
          type="text"
          onChange={(event) => {
            handleOnchange(event.target.value);
          }}
        />
        <button style={{ cursor: "pointer" }} onClick={handleClick}>
          Add
        </button>
      </div>
    </>
  );
};

export default TodoNew;
