import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import FormPanel from './components/FormPanel'
import GradeTable from './components/GradeTable'

function App() {
  const [count, setCount] = useState(0)
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [grade1, setGrade1] = useState("");
  const [grade2, setGrade2] = useState("");
  const [grade3, setGrade3] = useState("");

  function calculateAverage(){
    const result = (Number(grade1) + Number(grade2) + Number(grade3))/3;
    return result;
  }
  function remarks(){
    if(calculateAverage() >= 75){
      return "Passed";
    }else{
      return "Failed";
    }
  }

  const addStudent = () => {
    const newStudent = [name, Number(grade1), Number(grade2), Number(grade3), calculateAverage(), remarks()];
      setStudents(prev => [...prev, newStudent]);

      setName(""); setGrade1(""); setGrade2(""); setGrade3("");
  };

  return (
    <>
      <h1>Basic Grading System</h1>
      <FormPanel name={name} setName={setName} grade1={grade1} grade2={grade2} grade3={grade3} setGrade1={setGrade1} setGrade2={setGrade2} setGrade3={setGrade3} addStudent={addStudent}/>
      <GradeTable students={students}/>
    </>
  )
}

export default App
