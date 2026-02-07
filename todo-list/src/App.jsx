import { useState } from 'react'
import InputList from './components/InputList';
import ListDisplay from './components/ListDisplay';
import Modal from './components/Modal';

function App() {
  const [task, setTask] = useState("");
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState();

  function addTask(){
    if(task.trim() === "")return;
    setTasks([...tasks, task]);
    setTask("");
  }

  function deleteTask(index){
    setTasks(tasks.filter((_, i) => i !== index));
  }

  function edit(index){
    setIsOpen(true);
    setCurrentIndex(index);
    setNewTask(tasks[index]);
  }

  function editTask(currentIndex, newTask){
    setTasks(
      tasks.map((task, i) =>
        i === currentIndex ? newTask : task
      )
    );
    setNewTask("");
    setIsOpen(false);
  }

  return (
    <>
      <div>
        <h1>To-Do List</h1>
        <InputList task={task} setTask={setTask} addTask={addTask}/>
        <ListDisplay tasks={tasks} deleteTask={deleteTask} edit={edit}/>
        {isOpen && (
          <Modal setIsOpen={setIsOpen} currentIndex={currentIndex} newTask={newTask} editTask={editTask} setNewTask={setNewTask}/>
        )}
      </div>
    </>
  )
}

export default App
