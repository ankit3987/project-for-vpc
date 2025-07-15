import React from 'react';
import TaskList from './TaskList';
import AddTask from './AddTask';

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>📝 My Todo App</h1>
      <AddTask />
      <TaskList />
    </div>
  );
}

