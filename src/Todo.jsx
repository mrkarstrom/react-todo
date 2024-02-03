import { useState } from 'react';

function Todo() {
  const [tasks, setTask] = useState([]);
  const [newTask, setNewTask] = useState('');

  function handleImputChange(e) {}
  function addTask() {}
  function deleteTask(index) {}

  return <div>Todo</div>;
}

export default Todo;
