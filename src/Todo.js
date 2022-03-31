import logo from './logo.svg';
import { useState } from "react";
import './Todo.scss';
import {v4 as uuidv4} from 'uuid';


const Todo = ({todos, setTodos}) => {
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
              <input type="checkbox" /> {todo}
            </li>
          ))}
        </ul>
        <p>{todos.length} items left</p>
      </div>
  );
}
export default Todo;