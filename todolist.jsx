import React, { useState, useEffect } from 'react';

const TodoList = () => {

  const [tasks, setTasks] = useState([
    { id: 1, text: 'Menyiapkan barang-barang', completed: false },
    { id: 2, text: 'Melayani pelanggan', completed: false },
    { id: 3, text: 'Membersihkan toko', completed: false },
  ]);
  const [totalTasks, setTotalTasks] = useState(tasks.length);
  const [completedTasks, setCompletedTasks] = useState(0);

  useEffect(() => {
    alert('Selamat Datang');
    return () => {
      alert('Sampai Jumpa');
    };
  }, []);

  const addTask = () => {
    const newTask = prompt('Masukkan tugas baru:');
    if (newTask) {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setTotalTasks(totalTasks + 1);
    }
  };

  const completeTask = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    });
    setTasks(updatedTasks);
    setTotalTasks(totalTasks - (task.completed ? 1 : 0));
    setCompletedTasks(completedTasks + (task.completed ? 1 : -1));
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    setTotalTasks(totalTasks - 1);
    setCompletedTasks(completedTasks - (tasks.find((task) => task.id === id).completed ? 1 : 0));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <h2>Silahkan lihat daftar tugas harian Toko pada Todo List di bawah ini</h2>
      <p>Total Tasks: {totalTasks}</p>
      <p>Completed Tasks: {completedTasks}</p>
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.text}</span>
            <button onClick={() => completeTask(task.id)}>{task.completed ? 'Undo' : 'Complete'}</button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;