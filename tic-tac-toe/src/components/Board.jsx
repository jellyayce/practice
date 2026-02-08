import Square from "./Square";
function Board({squares, handleClick, winningCondition}){
    return(
        <>
            <div className="board">
                {squares.map((square, index) => (
                    <Square key={index} value={square} onClick={() => handleClick(index)} isWinning={winningCondition?.includes(index)}/>
                ))}
            </div>
        </>
    );
}
export default Board