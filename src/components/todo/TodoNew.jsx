const TodoNew = (props) => {
  const { addNewTodo } = props;
  return (
    <>
      <div className="todo-new">
        <input type="text" />
        <button
          onClick={() => {
            addNewTodo("Đức em");
          }}
        >
          Add
        </button>
      </div>
    </>
  );
};

export default TodoNew;
