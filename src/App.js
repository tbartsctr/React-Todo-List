import { useState } from 'react';
import './App.css';

function App(){
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editingIndex, setEditingIndex] = useState(null); 
  const [editedTask, setEditedTask] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([{ text: newTask, completed: false},...tasks]);
      setNewTask('');
    };
};


    const toggleTaskCompletion = (index) => {
      const updatedTasks = tasks.map((task, i) =>    
        i === index ? { ...task, completed: !task.completed } : task
    );
      setTasks(updatedTasks);  
  };
    

    const removeTask = (index) => {
      const updatedTasks = tasks.filter((task, i) => i !== index);
      setTasks(updatedTasks);

    };

    const startEditing = (index) => {
      setEditingIndex(index);  
      setEditedTask(tasks[index].text);  
    };

    const saveTask = (index) => {
      const updatedTasks = tasks.map((task, i) =>
        i === index ? { ...task, text: editedTask } : task
      );
      setTasks(updatedTasks);  
      setEditingIndex(null);  
      setEditedTask('');  
    };

    return (
      <div className="App">
        <h1>React Todo List</h1>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task!"/>

          <button onClick={addTask}>Add Task</button>
          <ul>
          {tasks.map((task, index) => (
            <li key={index} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {editingIndex === index ?( <input
                type="text"
                value={editedTask}
                onChange={(e) => setEditedTask(e.target.value)} 
              />
            ) : (
             
              <></>)}
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTaskCompletion(index)}
                />
                {task.text}
                {editingIndex === index ? (
              <button onClick={() => saveTask(index)}>Save</button>
            ) : (
              <>
                <button onClick={() => startEditing(index)}>Edit</button>
                <button
                  onClick={() => removeTask(index)} 
                  disabled={!task.completed} 
                >
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

