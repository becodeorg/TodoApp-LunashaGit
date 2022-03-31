import logo from './logo.svg';
import './Bar.scss';
import { useRef, useEffect ,useState } from "react";
import {v4 as uuidv4} from 'uuid';
  
  const Bar = ({addTodo}) => {
    const inputRef = useRef();
    function handleClick() {
    const inputElement = inputRef.current;
      console.log(inputElement.value);
      addTodo(inputElement.value);
  }
  return (
    <div className="Bar">
      <div className="input">
        <input ref={inputRef} type="text" placeholder='Type a new todo' />
        <br />
        <button onClick={handleClick}>Add Todo</button>
      </div>
      <hr />
    </div>
  );
}

export default Bar;
