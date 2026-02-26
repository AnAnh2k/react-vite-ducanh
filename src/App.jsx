import "./components/todo/todo.css";
import TodoData from "./components/todo/TodoData";
import TodoNew from "./components/todo/TodoNew";

import logo from "./assets/react.svg";

const App = () => {
  const name = "Đức Anh";

  const addNewTodo = (name) => {
    alert(`call me  ${name}`);
  };

  return (
    <>
      <div className="todo-container">
        <div className="todo-title">Todo List</div>
        <TodoNew addNewTodo={addNewTodo} />
        <TodoData name={name} />
        <div className="todo-image">
          <img src={logo} alt="" className="logo" />
        </div>
      </div>
    </>
  );
};

export default App;
