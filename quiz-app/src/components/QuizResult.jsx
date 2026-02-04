function QuizResult({score}){
    const isPassed = score >= 8;
    return(
        <>
            {isPassed ? 
                (
                    <div style={{ color: "green" }}>
                        <h3>Congratulations! You have passed the quiz.</h3>
                        <h2>Score: {score}</h2>
                    </div>
                ) 
                : 
                (
                    <div style={{ color: "red" }}>
                        <h3 >Unforunately you have failed the quiz.</h3>
                        <h2>Score: {score}</h2>
                    </div>
                )
            }
        </>
    );
}
export default QuizResult