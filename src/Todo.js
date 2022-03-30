import logo from './logo.svg';
import './Todo.scss';

const Todo = () => {
  return (
    <div className="Todo">
      <h2>Todos</h2>
      <ul className="checkbox">
        <li>
        <input type="checkbox" /> Learn React
        </li>
        <li>
        <input name="awesome" type="checkbox" /> Be Awesome !
        </li>
      </ul>
    </div>
  );
}

export default Todo;
