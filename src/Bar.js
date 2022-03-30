import logo from './logo.svg';
import './Bar.scss';

const Bar = () => {
  function handleClick(e) {
    e.preventDefault();
    console.log('Le lien a été cliqué.');
  }
  return (
    <div className="Bar">
      <div className="input">
      <input type="text" placeholder='Type a new todo' />
      <br />
      <button onClick={handleClick}>Add Todo</button>
      </div>
      <hr />
    </div>
  );
}

export default Bar;
