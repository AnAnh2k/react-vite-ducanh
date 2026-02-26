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

  function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const addNewTodo = (name) => {
    const newTodo = {
      id: randomIntFromInterval(1, 1000000),
      name: name,
    };

    setTodoList([...totoList, newTodo]);
    // totoList.push(newTodo);
    // setTodoList(totoList);
    //array.push
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
