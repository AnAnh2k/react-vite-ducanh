const TodoData = (props) => {
  const { totoList, setTodoList } = props;
  return (
    <>
      <div className="todo-data">
        <div>Learning React</div>
        <div>Watching Youtube</div>
        <div>{JSON.stringify(totoList)}</div>
      </div>
    </>
  );
};

export default TodoData;
