import './Bar.scss';
import { useRef } from "react";
  
  const Bar = ({addTodo}) => {
    const inputRef = useRef();
    const handleKeyPress = (event) => {
      if(event.key === 'Enter'){
        const inputElement = inputRef.current;
        if(inputElement.value == '') {
          alert('Please enter a todo');
        }else {
          addTodo(inputElement.value);
          inputElement.value = '';
        }
      }
    }
    const handleClick = () => {
    const inputElement = inputRef.current;
      if(inputElement.value == '') {
        alert('Please enter a todo');
      }else {
        addTodo(inputElement.value);
        inputElement.value = '';
      }
  }
  

  return (
    <div className="Bar">
      <div className="input">
        <input onKeyPress={handleKeyPress} ref={inputRef} type="text" placeholder='Type a new todo' />
        <button onClick={handleClick}>Add Todo</button>
      </div>
    </div>
  );
}

export default Bar;
