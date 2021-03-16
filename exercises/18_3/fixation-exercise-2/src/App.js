import { useState } from 'react';
import TodoList from './TodoList';
import useArray from './hooks/useArray';

function App() {
  const [newInput, setNewInput ] = useState('');
  const { addTodos, todos } = useArray();

  const handleInput = ({ target }) => {
    setNewInput(target.value);
  }

  const handleClick = () => {
    addTodos(newInput);
    setNewInput('');
  };

  return (
    <div>
      <label>Add a task:
        <input
        placeholder="cook"
        name="newIntem"
        value={newInput}
        onChange={handleInput} 
        />
      </label>
      <button onClick={()=> handleClick()}>Add</button>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
