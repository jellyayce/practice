function Square({value, onClick, isWinning}){
    return(
        <>
            <button className="square" onClick={onClick} style={{backgroundColor: isWinning ? "lightgreen" : null}}>
                {value}
            </button>
        </>
    );
}
export default Square