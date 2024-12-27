import React, { useState, useEffect } from 'react';

function Hook_task6() {
  // State to store tasks
  const [tasks, setTasks] = useState([]);
  // State to store the new task input value
  const [newTask, setNewTask] = useState('');

  // useEffect to load tasks from localStorage on component mount
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  // useEffect to save tasks to localStorage when the tasks array changes
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Function to handle adding a new task
  const handleAddTask = () => {
    if (newTask.trim() === '') {
      return; // Prevent adding empty tasks
    }
    const newTaskObject = {
      id: Date.now(), // Unique ID using timestamp
      text: newTask,
      completed: false,
    };
    setTasks([...tasks, newTaskObject]);
    setNewTask('');
  };

  // Function to handle marking a task as completed
  const handleToggleCompletion = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  // Function to handle deleting a task
  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>

      {/* Input field for adding new tasks */}
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={handleAddTask}>Add Task</button>

      {/* Task list */}
      <ul>
        {tasks.map((task) => (
          <li key={task.id} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleCompletion(task.id)}
            />
            {task.text}
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Hook_task6;