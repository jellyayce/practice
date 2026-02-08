import { useState } from 'react'
import Board from './components/Board';

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  function handleClick(index){
    if (squares[index] || handleWinner(squares))return;

    const nextSquares = squares.slice();
    nextSquares[index] = isXNext ? "BISAYA" : "TAGALOG";

    setSquares(nextSquares);
    setIsXNext(!isXNext);
  }

  function handleWinner(squares){
    const conditions = [
      [0,1,2], [3,4,5], [6,7,8],
      [0,3,6], [1,4,7], [2,5,8],
      [0,4,8], [2,4,6],
    ];

    for(let i = 0; i < conditions.length; i++){
      const condition = conditions[i];
      const a = condition[0];
      const b = condition[1];
      const c = condition[2];

      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return { winner: squares[a], condition };
      }
    }
    return null;
  }

  function reset(){
    setSquares(Array(9).fill(null));
    setIsXNext(true);
  }

  const winner = handleWinner(squares);
  const draw = !winner && squares.every(square => square !== null);

  return (
    <>
      <h1>Tic-Tac-Toink</h1>
      <p>
        {winner ? 
          `Winner: ${winner?.winner}` 
          : 
          draw ? 
            "Equal lang tayong lahat"
            : 
            `Next player: ${isXNext ? "BISAYA" : "TAGALOG"}`}
      </p> 
      <Board squares={squares} handleClick={handleClick} winningCondition={winner?.condition}/>
      <br />
      <button style={{background:"#213547", color:"white"}} onClick={reset}>Reset Game</button> 
    </>
  )
}

export default App
