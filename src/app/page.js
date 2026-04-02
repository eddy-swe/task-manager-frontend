'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [tasks, setTasks] = useState([]);

  // Fetch tasks
  const fetchTasks = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/tasks');
      const data = await res.json();
      setTasks(data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchTasks();
  }, []);

  return (
    <main className="p-6 min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">
        Task Manager 🚀
      </h1>

      <div className="space-y-3">
        {tasks.length === 0 ? (
          <p>No tasks yet...</p>
        ) : (
          tasks.map((task) => (
            <div
              key={task._id}
              className="p-4 bg-white rounded shadow"
            >
              <h2 className="font-semibold text-lg">
                {task.title}
              </h2>

              <p className="text-sm text-gray-500">
                {task.completed ? '✅ Completed' : '⏳ Pending'}
              </p>
            </div>
          ))
        )}
      </div>
    </main>
  );
}