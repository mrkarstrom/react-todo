import { useState } from 'react';

function Todo() {
  const [tasks, setTasks] = useState(['test', 'test2', 'something else']);
  const [newTask, setNewTask] = useState('');

  function handleInputChange(e) {
    setNewTask(e.target.value);
  }
  function addTask() {
    setTasks((t) => [newTask, ...t]);
    setNewTask('');
  }
  function deleteTask(index) {}
  function moveTaskUp(index) {}
  function moveTaskDown(index) {}

  return (
    <div className="to-do-list">
      <h1>Todo-list</h1>
      <div className="">
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-button" onClick={() => deleteTask(index)}>
              Delete
            </button>
            <button
              className="move-up-button"
              onClick={() => moveTaskUp(index)}
            >
              ☝
            </button>
            <button
              className="move-down-button"
              onClick={() => moveTaskDown(index)}
            >
              👇
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Todo;
