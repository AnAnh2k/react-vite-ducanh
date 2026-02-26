const TodoData = (props) => {
  const { totoList, setTodoList } = props;
  return (
    <>
      <div className="todo-data">
        {totoList.map((item, index) => {
          return (
            <div className="todo-item">
              <div key={item.id}>{item.name}</div>
              <button>Delete</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TodoData;
