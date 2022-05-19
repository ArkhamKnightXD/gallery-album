import React, {useState} from 'react';
import './quiz.css';
import {useNavigate} from "react-router-dom";




export default function  QuizApp() {

let navigate = useNavigate();





    const questions = [
        {
            questionText: 'What is the capital of France?',
            answerOptions: [
                { answerText: 'New York', isCorrect: false },
                { answerText: 'London', isCorrect: false },
                { answerText: 'Paris', isCorrect: true },
                { answerText: 'Dublin', isCorrect: false },
            ],

        },
        {
            questionText: 'Who is CEO of Tesla?',
            answerOptions: [
                { answerText: 'Jeff Bezos', isCorrect: false },
                { answerText: 'Elon Musk', isCorrect: true },
                { answerText: 'Bill Gates', isCorrect: false },
                { answerText: 'Tony Stark', isCorrect: false },
            ],
        },
        {
            questionText: 'The Iphone was created by which company?',
            answerOptions: [
                { answerText: 'Apple', isCorrect: true },
                { answerText: 'Intel', isCorrect: false },
                { answerText: 'Amazon', isCorrect: false },
                { answerText: 'Microsoft', isCorrect: false },
            ],
        },
        {
            questionText: 'How many Harry Potter books are there?',
            answerOptions: [
                { answerText: '1', isCorrect: false },
                { answerText: '4', isCorrect: false },
                { answerText: '6', isCorrect: false },
                { answerText: '7', isCorrect: true },
            ],
        },

        {
            questionText: 'Which country is the smallest in the world?',
            answerOptions: [
                { answerText: 'Bahamas', isCorrect: false },
                { answerText: 'Puerto Rico', isCorrect: false },
                { answerText: 'Vaticano City', isCorrect: true },
                { answerText: 'Monaco', isCorrect: false },
            ],
        },
    ]

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [recordedScore, setRecordedScore] = useState(0);



    const resetStateClick =()=>{
        setCurrentQuestion (0)
        setShowScore(false)
        setScore(0)
        setRecordedScore(score)
    }

    const handleAnswerButtonClick = (isCorrect) => {
        if(isCorrect===true){

            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        setCurrentQuestion(nextQuestion);
        if(nextQuestion < questions.length){
            setCurrentQuestion(nextQuestion);
        } else{
            setShowScore(true);
        }


    }

    return(
        <div className="app-quiz">

            {/*Aqui pregunta si showscore es true y si es true muestra la puntuacion y si no, muestra las preguntas
            (esto es basicamente un if).*/}
            {showScore ? (
                <div className="score-section">You scored {score} out of {questions.length}
                <button className="retry-btn" onClick={resetStateClick}>Retry</button></div>
            ) : (
                <>

                    <div className="question-section">
                        <div className="question-count">
                            <span>Question {currentQuestion + 1}</span>/{questions.length}
                        </div>
                        <div className="question-text">{questions[currentQuestion].questionText}</div>
                        <div className="lastscore">
                            <p>Your Last Score: {recordedScore}</p>
                        </div>
                    </div>
                    <div className="answer-section">
                        {questions[currentQuestion].answerOptions.map((answerOption) => (
                            <button className="button-quiz" onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                        ))}
                    </div>
                </>
            )}





        </div>
    );
}
