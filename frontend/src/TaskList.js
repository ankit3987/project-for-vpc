import { useEffect, useState } from 'react';
import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BACKEND_URL;

export default function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_URL}/tasks`).then(res => setTasks(res.data));
  }, []);

  const deleteTask = async (id) => {
    await axios.delete(`${BASE_URL}/tasks/${id}`);
    setTasks(tasks.filter(t => t._id !== id));
  };

  return (
    <div>
      <h3>Tasks</h3>
      <ul>
        {tasks.map(t => (
          <li key={t._id}>
            {t.title} <button onClick={() => deleteTask(t._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

