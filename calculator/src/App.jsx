import { use, useState } from 'react'
import Display from './Components/Display';
import ButtonPanel from './Components/ButtonPanel';

function App() {
  const [display, setDisplay] = useState("0");
  const [previousValue, setPreviousValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [isNewEntry, setIsNewEntry] = useState(false);

  function handleButtonClick(label){
    if(!isNaN(label) || label === "."){
      handleNumber(label);
    }else if(["+", "-", "*", "/"].includes(label)){
      handleOperator(label);
    }else if (label === "=") {
      handleEquals();
    } else if (label === "C") {
      handleC();
    }
  }

  function handleNumber(num){
    if(isNewEntry){
      setDisplay(num);
      setIsNewEntry(false);
    }else{
      setDisplay(display === "0" ? num : display + num)
    }
  }

  function handleOperator(op){
    if(previousValue !== null && operator !== null && !isNewEntry){
      const result = compute();
      setPreviousValue(result);
      setDisplay(Number(result));
    }else{
      setPreviousValue(Number(display));
    }
    
    setOperator(op);
    setIsNewEntry(true);
  }

  function handleEquals(){
    if(operator === null || previousValue === null)return;

    const result = compute();
    setDisplay(String(result));
    setPreviousValue(null);
    setOperator(null);
    setIsNewEntry(true);
  }

  function handleC() {
    setDisplay("0");
    setPreviousValue(null);
    setOperator(null);
    setIsNewEntry(false);
  }

  function compute() {
    const current = Number(display);

    switch (operator) {
      case "+":
        return previousValue + current;
      case "-":
        return previousValue - current;
      case "*":
        return previousValue * current;
      case "/":
        return current === 0 ? 0 : previousValue / current;
      default:
        return previousValue;
    }
  }

  const buttons = [
              ["7", "8", "9", "/"],
              ["4", "5", "6", "*"],
              ["1", "2", "3", "-"],
              ["0", ".", "=", "+"],
              ["C"]
            ];
  return (
    <>
      <h1>CALCULATOR</h1>
      <Display display={display}/>
      <ButtonPanel buttons={buttons} buttonClick={handleButtonClick}/>
    </>
  )
}

export default App
