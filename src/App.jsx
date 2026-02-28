import "./components/todo/todo.css";
import TodoData from "./components/todo/TodoData";
import TodoNew from "./components/todo/TodoNew";

import logo from "./assets/react.svg";
import { useState } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

const App = () => {
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
      <Header />
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
      <Footer />
    </>
  );
};

export default App;
