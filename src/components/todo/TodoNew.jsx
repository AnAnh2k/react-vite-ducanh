import { useState } from "react";

const TodoNew = (props) => {
  const [valueInput, SetValueInput] = useState("Đức Anh");

  const { addNewTodo } = props;

  const handleOnchange = (name) => {
    SetValueInput(name);
  };

  const handleClick = () => {
    console.log(">>> check valueInput: ", valueInput);
    addNewTodo(valueInput);
  };
  return (
    <>
      <div className="todo-new">
        <input
          value={valueInput}
          type="text"
          onChange={(event) => {
            handleOnchange(event.target.value);
          }}
        />
        <button style={{ cursor: "pointer" }} onClick={handleClick}>
          Add
        </button>
        <div>My text input is = {valueInput}</div>
      </div>
    </>
  );
};

export default TodoNew;
