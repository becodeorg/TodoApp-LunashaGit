import logo from './logo.svg';
import Rename from './Rename.png';
import { useRef, useState } from "react";
import './Todo.scss';
import {v4 as uuidv4} from 'uuid';


const Todo = ({todos, setTodos}) => {
  const ChangeText = (todo) => {
    const rename = window.prompt("Please enter a new name", todo.target.textContent);
    if(rename) {
      todo.target.textContent = rename;
    }
  }

  return (
      <div className="Todo">
        <h2>TodoList</h2>
        <button onClick={
          () => {
            if(window.confirm(' !!! Are you sure you want to delete all todos? !!! \n This action cannot be undone.')) {
            setTodos([]);
          }
        }}>Clean the list</button>
        <ul className="checkbox">
          {todos.map((todo) => (
            <li key={uuidv4()}>
              <input name="checkbox" type="checkbox" /> 
              <label onClick={ChangeText} htmlFor="checkbox">
               {todo}
              </label>
              
            </li>
          ))}
        </ul>
        <p>{todos.length} items left</p>
      </div>
  );
}
export default Todo;