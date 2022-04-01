import logo from './logo.svg';
import Rename from './Rename.png';
import { useEffect, useRef, useState } from "react";
import './Todo.scss';
import {v4 as uuidv4} from 'uuid';
let LSKEY = 'MyTodoApp';


const Todo = ({todos, completeTodo, setTodos, setStatus, filteredTodos}) => {
  /* let ChangeText = (event) => {
      const rename = window.prompt("Please enter a new name", event.target.textContent);
      if(rename) {
        event.target.textContent = rename;
    }
  } */
  /* todos.map((todo) => {
    console.log(todo)
  }) */

  /* useEffect(() => {
    window.localStorage.setItem(LSKEY + ".todos", JSON.stringify(todos));
  },[todos]); */
  
  const statusHandler = (e) => {
    setStatus(e.target.value)
  }
  
  return (
      <div className="Todo">
        <h2>TodoList</h2>
        <ul className="checkbox">
          {filteredTodos.map(todo => (
            <li key={todo.id}>
              <input  onChange={() => completeTodo(todo)} name="checkbox" type="checkbox" /> 
              <label  htmlFor="checkbox">
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