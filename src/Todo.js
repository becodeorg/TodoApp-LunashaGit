import logo from './logo.svg';
import './Todo.scss';

const Todo = () => {
  return (
    <div className="Todo">
      <h2>Todos</h2>
      <div className="checkbox">
        <label>
        <input type="checkbox" />
        Learn React
        </label>
        <label htmlFor="awesome">
        <input name="awesome" type="checkbox" />
        Be Awesome !
        </label>
      </div>
    </div>
  );
}

export default Todo;
