'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');

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

  // Create task
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    try {
      await fetch('http://localhost:5000/api/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title }),
      });

      setTitle('');
      fetchTasks(); // refresh list
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  const toggleTask = async(id) => {
    try{
      await fetch(`http://localhost:5000/api/tasks/${id}/toggle`, {
        method: 'PATCH',
      });

      fetchTasks(); //refresh
    } catch(error){
      console.error('Error toggling task:', error);
    }
  };

  const deleteTask = async(id) => {
    try{
      if(!confirm('Are you sure?')) return;
      
      await fetch(`http://localhost:5000/api/tasks/${id}`, {
        method: 'DELETE',
      });

      fetchTasks(); //refresh
    } catch(error){
      console.error('Error deleting task:', error);
    }
  };

  return (
    <main className="p-6 min-h-screen ">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">
        Task Manager 🚀
      </h1>

      {/* Form */}
      <form onSubmit={handleSubmit} className="mb-6 flex gap-2">
        <input
          type="text"
          placeholder="Enter a task..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="flex-1 p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 rounded"
        >
          Add
        </button>
      </form>

      {/* Task List */}
      <div className="space-y-3">
        {tasks.length === 0 ? (
          <p>No tasks yet...</p>
        ) : (
          tasks.map((task) => (
            <div
              key={task._id}
              className="p-4 bg-white rounded shadow flex justify-between items-center"
            >
              <h2
                onClick={() => toggleTask(task._id)}
                className={`font-semibold text-lg cursor-pointer ${
                  task.completed ? 'line-through text-gray-400' : ''
                }`}
              >
                {task.title}
              </h2>

              <p className="text-sm text-gray-500">
                {task.completed ? '✅ Completed' : '⏳ Pending'}
              </p>
            
              <button
                onClick={() => deleteTask(task._id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>     
          ))
        )}
      </div>
    </main>
  );
}