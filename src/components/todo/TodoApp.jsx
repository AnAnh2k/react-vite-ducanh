import { useState } from "react";
import TodoData from "./TodoData";
import TodoNew from "./TodoNew";

import "./todo.css";

import logo from "../../assets/react.svg";
const TodoApp = () => {
  const [totoList, setTodoList] = useState([]);

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
  };

  const removeTodo = (id) => {
    const result = totoList.filter((item) => item.id !== id);
    setTodoList(result);
  };
  return (
    <>
      <div className="todo-container">
        <div className="todo-title">Todo List</div>
        <TodoNew addNewTodo={addNewTodo} />

        {totoList.length > 0 ? (
          <TodoData
            totoList={totoList}
            setTodoList={setTodoList}
            removeTodo={removeTodo}
          />
        ) : (
          <div className="todo-image">
            <img src={logo} alt="" className="logo" />
          </div>
        )}
      </div>
    </>
  );
};

export default TodoApp;
