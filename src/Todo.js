import logo from './logo.svg';
import { useState } from "react";
import './Todo.scss';
import {v4 as uuidv4} from 'uuid';


const Todo = ({todos}) => {
  
  return (
      <div className="Todo">
        <h2>Todos</h2>
        <ul className="checkbox">
          {todos.map((todo) => (
            <li key={uuidv4()}>
              <input type="checkbox" /> {todo}
            </li>
          ))}
        </ul>
        <p>{todos.length} items left</p>
      </div>
  );
}
export default Todo;