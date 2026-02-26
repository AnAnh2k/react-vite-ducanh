import "./components/todo/todo.css";
import TodoData from "./components/todo/TodoData";
import TodoNew from "./components/todo/TodoNew";

import logo from "./assets/react.svg";

const App = () => {
  const name = "Đức Anh";
  return (
    <>
      <div className="todo-container">
        <div className="todo-title">Todo List</div>
        <TodoNew />
        <TodoData name={name} />
        <div className="todo-image">
          <img src={logo} alt="" className="logo" />
        </div>
      </div>
    </>
  );
};

export default App;
