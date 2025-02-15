import react, { useState } from 'react';

function App(){
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask]);
      setNewTask('');
    };

    const removeTask = (index) => {
      const updatedTasks = tasks.filter((task, i) => i !== index);
      setTasks(updatedTasks);
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
            {tasks.map((task, index)=> (
              <li key={index}>
                {task} <button onClick={() => removeTask(index)}>Delete</button>
              </li>
            ))}
          </ul>
      </div>
    );
  }


}

export default App;