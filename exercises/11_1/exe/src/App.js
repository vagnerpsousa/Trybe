import './App.css';

const tarefas = ['cafe da manha', 'estudar', 'trabalhar', 'almoçar', 'curso', 'atividade fisica', 'estudar', 'dormir'];

function App() {
  return (
    <ul>
      {
        tarefas.map(tarefa => <li>{tarefa}</li>)
      }
    </ul>
  );
}

export default App;
