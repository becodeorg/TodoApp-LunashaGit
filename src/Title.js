import logo from './logo.svg';
import './Title.scss';
import Todo from './Todo';
import Bar from './Bar';
import {v4 as uuidv4} from 'uuid';
import { useState, useEffect } from "react";
const LSKEY = "MyTodoApp";
const Title = () => {
  const initialTodos = ["Test","A","B","C","D"];
  const [todos, setTodos] = useState(initialTodos);

  
  return (
    <div className="Title">
      <h1>My Todo App</h1>
      <hr />
      <Bar todos={todos} setTodos={setTodos}/>
      <Todo todos={todos} />
    </div>
  );
}

export default Title;
