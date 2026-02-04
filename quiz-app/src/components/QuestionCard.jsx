
function QuestionCard({questions, currentQuestion, setAnswer, handleNextButton, answer}){
    return(
        <>
            <div>
                <h2>{questions[currentQuestion].question}</h2>
                {questions[currentQuestion].options.map((option) => {

                const isSelected = option === answer;
                
                return (
                    <button
                        key={option}
                        onClick={() => setAnswer(option)}
                        className={`option-button ${isSelected ? "selected" : ""}`}
                        >
                        {option}
                    </button>
                    );
                })}
            </div>
            <button onClick={handleNextButton}>
                Next
            </button>
        </>
    );
}
export default QuestionCard