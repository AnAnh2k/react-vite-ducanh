const TodoData = (props) => {
  const { totoList, removeTodo } = props;

  const handleClick = (id) => {
    removeTodo(id);
  };
  return (
    <>
      <div className="todo-data">
        {totoList.map((item, index) => {
          return (
            <div key={item.id} className="todo-item">
              <div>{item.name}</div>
              <button onClick={() => handleClick(item.id)}>Delete</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TodoData;
