import "./components/todo/todo.css";
import TodoData from "./components/todo/TodoData";
import TodoNew from "./components/todo/TodoNew";

import logo from "./assets/react.svg";
import { useState } from "react";

const App = () => {
  const [totoList, setTodoList] = useState([
    { id: 1, name: "Learning React" },
    { id: 2, name: "Watching Youtube" },
  ]);
  const addNewTodo = (name) => {
    alert(`call me = ${name}`);
  };

  return (
    <>
      <div className="todo-container">
        <div className="todo-title">Todo List</div>
        <TodoNew addNewTodo={addNewTodo} />
        <TodoData totoList={totoList} setTodoList={setTodoList} />
        <div className="todo-image">
          <img src={logo} alt="" className="logo" />
        </div>
      </div>
    </>
  );
};

export default App;
