import React from 'react';
import './App.css';

const tarefas = ["Acordar", "Tomar café", "Escovar os dentes", "Ir trabalhar"];

const App = () => tarefas.map((tarefa) => <li>{tarefa}</li>);

export default App;