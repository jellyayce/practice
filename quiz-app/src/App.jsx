import { useState } from 'react'
import './App.css'
import QuestionCard from './components/QuestionCard';
import QuizResult from './components/QuizResult';
import QuizStart from './components/QuizStart';

function App() {
  const [count, setCount] = useState(0)
  
  const questions = [
    {
      question: "What is the value of sin 30°?",
      options: ["1", "1/2", "√3/2", "0"],
      answer: "1/2"
    },
    {
      question: "What is the value of cos 60°?",
      options: ["1/2", "√3/2", "1", "0"],
      answer: "1/2"
    },
    {
      question: "What is the value of tan 45°?",
      options: ["0", "1", "√3", "1/2"],
      answer: "1"
    },
    {
      question: "Which trigonometric ratio is opposite over hypotenuse?",
      options: ["Sine", "Cosine", "Tangent", "Secant"],
      answer: "Sine"
    },
    {
      question: "Which trigonometric ratio is adjacent over hypotenuse?",
      options: ["Sine", "Tangent", "Cosine", "Cotangent"],
      answer: "Cosine"
    },
    {
      question: "What is the value of sin 90°?",
      options: ["0", "1", "√3/2", "1/2"],
      answer: "1"
    },
    {
      question: "What is the value of cos 0°?",
      options: ["0", "1/2", "√3/2", "1"],
      answer: "1"
    },
    {
      question: "What is the value of tan 0°?",
      options: ["0", "1", "Undefined", "√3"],
      answer: "0"
    },
    {
      question: "If sin θ = 1/2, what is θ (0°–90°)?",
      options: ["30°", "45°", "60°", "90°"],
      answer: "30°"
    },
    {
      question: "Which of the following is NOT a primary trigonometric function?",
      options: ["Sine", "Cosine", "Tangent", "Secant"],
      answer: "Secant"
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(false);
  const [start, setStart] = useState(false);

  function handleNextButton(){
    if(answer !== null){
      if(answer === questions[currentQuestion].answer){
        setScore(score+1);
      }
    }
    if (currentQuestion === questions.length - 1) {
      setResult(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
      setAnswer(null);
    }
  }

  function handleStartButton(){
    setStart(true);
  }

  return (
    <>
      {start ? (result ? (
          <QuizResult score={score}/>
          ) : (
          <QuestionCard questions={questions} currentQuestion={currentQuestion} setAnswer={setAnswer} handleNextButton={handleNextButton} answer={answer}/>
          )
        ) : <QuizStart handleStartButton={handleStartButton}/> 
      }
    </>
  )
}

export default App
