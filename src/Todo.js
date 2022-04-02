import './Todo.scss';


const Todo = ({changeTodo, todos, completeTodo, setTodos, setStatus, filteredTodos}) => {

  const statusHandler = (e) => {
    setStatus(e.target.value)
  }
  
  return (
      <div className="Todo">
        <h2>TodoList</h2>
        <ul className="checkbox">
          {filteredTodos.map(todo => (
            <li key={todo.id}>
              <input onChange={() => completeTodo(todo)} name="checkbox" type="checkbox" /> 
              <label onDoubleClick={() => changeTodo(todo)}htmlFor="checkbox">
               {todo.todo}
              </label>
            </li>
          ))}
        </ul>
        <div className="footer">
          <p>{filteredTodos.length} items left</p>
          <button onClick={
            () => {
              if(window.confirm(' !!! Are you sure you want to delete all todos? !!! \n This action cannot be undone.')) {
              setTodos([]);
            }
          }}>Clean</button>
          <button onClick={statusHandler} value="all">All</button>
          <button onClick={statusHandler} value="completed">Completed</button>
          <button onClick={statusHandler} value="uncompleted">Uncompleted</button>
        </div>
      </div>
  );
}
export default Todo;