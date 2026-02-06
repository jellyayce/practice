import { useState } from 'react'
import NumberGuessing from './Components/NumberGuessing';

function App() {
  const [count, setCount] = useState(0)
  const [target] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");

  function handleGuess(){
    const num = Number(guess);

    if(!num){
      setMessage("yo that ain't a number cuh!");
      return;
    }

    if(num === target){
      setMessage("Ting! Ting! Ting! Sakto ka bai");
    }else if(num > target){
      setMessage("Enk!!! Dako ra bai!");
    }else{
      setMessage("Enk!!! Gamay ra bai!");
    }
  }

  return (
    <>
      <h1>Number Guessing Sah Ta Chuy!</h1>
      <p>Panag-an ara ug numero gikan sa UNO hangtud WANHANDRED</p>
      <NumberGuessing guess={guess} setGuess={setGuess} handleGuess={handleGuess}/>
      <h2>{message}</h2>
    </>
  )
}

export default App
