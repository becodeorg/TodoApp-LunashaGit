import './Title.scss';
import Todo from './Todo';
import Bar from './Bar';
import {v4 as uuidv4} from 'uuid';
import { useState, useEffect } from "react";
import { Route } from 'react-router'
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import useKonami from 'use-konami';
import EasterEggSardoche from './SardocheEasterEgg.mp3'

const Sardoche = new Audio(EasterEggSardoche)

const GlobalStyle = createGlobalStyle`
body{
  background-color: ${props => props.theme.mode === 'dark' ? '#111' : '#FFF'};
  color: ${props => props.theme.mode === 'dark'? '#FFF' : '#111'};
}
input[type="text"]{
  background-color: ${props => props.theme.mode === 'dark' ? '#111' : '#FFF'};
  color: ${props => props.theme.mode === 'dark'? '#FFF' : '#111'};
}
.Todo button{
  color: ${props => props.theme.mode === 'dark'? '#FFF' : '#111'};
  background-color: ${props => props.theme.mode === 'dark'? '#111' : '#FFF'};
}
.Bar .input button {
  background-color: ${props => props.theme.mode === 'dark'? '#111' : '#FFF'};
  opacity: ${props => props.theme.mode === 'dark'? '0.7 ' : '0.5'}
}
.Todo .deleteButton{
  background-color: ${props => props.theme.mode === 'dark'? '#111' : '#FFF'};
  opacity: ${props => props.theme.mode === 'dark'? '0.7 ' : '0.5'}
}
.Todo .checkbox input:checked::before{
  background-color: ${props => props.theme.mode === 'dark'? '#8c00ff' : '#fdd1ff'}
}
.ButtonTitle{
  background-color: ${props => props.theme.mode === 'dark'? '#111' : '#FFF'};
}
`


let LSKEY = 'MyTodoApp';

const Title = () => {
  let initialTodos = [];

  const [todos, setTodos] = useState(() => {
    initialTodos = JSON.parse(localStorage.getItem(LSKEY + ".todos"));
    return initialTodos || [];
  });

  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([])

  function getInitialTheme() {
    const savedTheme = localStorage.getItem(LSKEY + ".theme") 
    return savedTheme ? JSON.parse(savedTheme) : { mode: 'light' }
  }
  const [theme, setTheme] = useState(getInitialTheme)

  const filterHandler = () => { 
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilteredTodos(todos)
    }
  }
  
  const addTodo = (todo) => {
    setTodos([...todos, { id: uuidv4(), todo, completed: false, checked: false}]);
  }
  
  const completeTodo = (todo) => {
    let goodTodo = todos.find(x => x.id === todo.id)
    goodTodo.completed = !goodTodo.completed;
    goodTodo.checked = !goodTodo.checked;
    setTodos([...todos])
    
  }

  const changeTodo = (todo) => {
    const rename = window.prompt("Please enter a new name", todo.todo);
    let goodTodo = todos.find(x => x.id === todo.id)
    if(rename){
      goodTodo.todo = rename;
      goodTodo.todo = todo.todo;
      setTodos([...todos])
    }
  }

  const EasterEgg = () => {
    useKonami({
      onUnlock: () => Sardoche.play(),
      sequence: ['s', 'a', 'r', 'd', 'o', 'c', 'h', 'e'],
    });
    
  }
  const LumosMaxima = () => { 
    useKonami({
      onUnlock: () => window.location.href = "https://www.youtube.com/watch?v=pv3o4ucFExU",
      sequence: ['l','u','m','o','s','m','a','x','i','m','a'],
    });
    
  }

  useEffect(() => {
    window.localStorage.setItem(LSKEY + ".todos", JSON.stringify(todos));
  },[todos]);
  
  useEffect(() => {
    window.localStorage.setItem(LSKEY + ".theme", JSON.stringify(theme));
  },[theme]);

  useEffect(() => {
    filterHandler();
  }, [todos,status]);
  
  return (
    <ThemeProvider theme={theme}>
      <>
      <GlobalStyle />
        <div className="Title">
          <EasterEgg />
          <LumosMaxima />
          <h1>todos</h1>
          <Bar addTodo={addTodo}/>
          <Todo changeTodo={changeTodo} completeTodo={completeTodo} setStatus={setStatus} setTodos={setTodos} todos={todos} filteredTodos={filteredTodos}/>
          <button className='ButtonTitle' onClick={() => setTheme(theme.mode === 'dark' ? { mode : 'light'} : { mode : 'dark'})}>Change Theme </button>
        </div>
      </>
    </ThemeProvider>
  );
}

export default Title;
