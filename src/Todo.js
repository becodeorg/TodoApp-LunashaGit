import logo from './logo.svg';
import './Todo.scss';
import { useState } from "react";

const Todo = () => {
  const initialTodos = ["My first todo", "My second todo"];
	const [todos, setTodos] = useState(initialTodos);
  return (
    <div className="Todo">
      <h2>Todos</h2>
      <ul className="checkbox">
          {todos.map((todo) => (
          <li>
            <input type="checkbox" /> {todo}
          </li>
          ))}
      </ul>
    </div>
  );
}

export default Todo;
