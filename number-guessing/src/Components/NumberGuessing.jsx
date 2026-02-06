function NumberGuessing({guess, setGuess, handleGuess}){
    return(
        <>
            <input type="text" value={guess} placeholder="Tag-an2 lang gud" onChange={(e) => setGuess(e.target.value)}/>
            <button onClick={handleGuess}>Guess</button>
        </>
    );
}
export default NumberGuessing