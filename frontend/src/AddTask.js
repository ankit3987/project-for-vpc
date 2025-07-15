import { useState } from 'react';
import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BACKEND_URL;

export default function AddTask() {
  const [title, setTitle] = useState('');

  const addTask = async () => {
    if (!title) return alert("Enter a title!");
    await axios.post(`${BASE_URL}/tasks`, { title });
    setTitle('');
    window.location.reload();
  };

  return (
    <div>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="New task" />
      <button onClick={addTask}>Add</button>
    </div>
  );
}
