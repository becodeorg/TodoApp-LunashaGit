import logo from './logo.svg';
import Rename from './Rename.png';
import { useEffect, useRef, useState } from "react";
import './Todo.scss';
import {v4 as uuidv4} from 'uuid';
let LSKEY = 'MyTodoApp';


const Todo = ({todos, setTodos, setStatus, filteredTodos}) => {
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
  
  const handleClick = (event) => {
    console.log(event.target)
    if(event.target.classList.contains('all')) {
    event.target.classList.remove('all');
    event.target.classList.add('active');
    }else if(event.target.classList.contains('active')) {
      event.target.classList.remove('active');
      event.target.classList.add('completed');
    }
  }
  
  const statusHandler = (e) => {
    console.log(e.target.value);
    setStatus(e.target.value)
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
          {filteredTodos.map(todo => (
            <li className='all' key={uuidv4()}>
              <input name="checkbox" type="checkbox" /> 
              <label  htmlFor="checkbox">
               {todo.todo}
              </label>
              
            </li>
          ))}
        </ul>
          <p>{todos.length} items left</p>
        <div className="footer">
          <select onChange={statusHandler} className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </div>
  );
}
export default Todo;