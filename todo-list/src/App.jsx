import { useState } from 'react'
import InputList from './components/InputList';
import ListDisplay from './components/ListDisplay';

function App() {
  
  const [task, setTask] = useState("");
  const[tasks, setTasks] = useState([]);

  function addTask(){
    if(task.trim() === "")return;
    setTasks([...tasks, task]);
    setTask("");
  }

  function deleteTask(index){
    setTasks(tasks.filter((_, i) => i !== index));
  }

  return (
    <>
      <div>
        <h1>To-Do List</h1>
        <InputList task={task} setTask={setTask} addTask={addTask}/>
        <ListDisplay tasks={tasks} deleteTask={deleteTask}/>
      </div>
    </>
  )
}

export default App
