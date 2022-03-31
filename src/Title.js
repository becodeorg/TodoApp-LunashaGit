import logo from './logo.svg';
import './Title.scss';
import Todo from './Todo';
import Bar from './Bar';
import {v4 as uuidv4} from 'uuid';
import { useState, useEffect } from "react";
const LSKEY = 'MyTodoApp';
const Title = () => {
  let initialTodos = [];
  const [todos, setTodos] = useState(() => {
    initialTodos = JSON.parse(localStorage.getItem(LSKEY + ".todos"));
    return initialTodos || [];
  });

  function addTodo(todo) {
    setTodos([...todos, todo]);
  }

  useEffect(() => {
    window.localStorage.setItem(LSKEY + ".todos", JSON.stringify(todos));
  },[todos]);

  return (
    <div className="Title">
      <h1>Todos</h1>
      <hr />
      <Bar addTodo={addTodo}/>
      <Todo setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default Title;
