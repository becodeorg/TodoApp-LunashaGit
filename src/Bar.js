import logo from './logo.svg';
import './Bar.scss';

const Bar = () => {
  return (
    <div className="Bar">
      <div className="input">
      <input type="text" placeholder='Type a new todo' />
      <br />
      <button>Add Todo</button>
      </div>
      <hr />
    </div>
  );
}

export default Bar;
