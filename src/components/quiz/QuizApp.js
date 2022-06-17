import React, {useState} from 'react';
import './quiz.css';
import {useNavigate} from "react-router-dom";

import '../../spinner.css';
import { useEffect } from "react";
import PuffLoader from "react-spinners/PuffLoader";
import useLoading from "../useLoading";


export default function  QuizApp() {

let navigate = useNavigate();





    const questions = [
        {
            questionText: 'What is the capital of France?',
            answerOptions: [
                {id: 1, answerText: 'New York', isCorrect: false },
                {id: 2, answerText: 'London', isCorrect: false },
                {id: 3, answerText: 'Paris', isCorrect: true },
                {id: 4, answerText: 'Dublin', isCorrect: false },
            ],

        },
        {
            questionText: 'Who is CEO of Tesla?',
            answerOptions: [
                {id: 5, answerText: 'Jeff Bezos', isCorrect: false },
                {id: 6, answerText: 'Elon Musk', isCorrect: true },
                {id: 7, answerText: 'Bill Gates', isCorrect: false },
                {id: 8, answerText: 'Tony Stark', isCorrect: false },
            ],
        },
        {
            questionText: 'The Iphone was created by which company?',
            answerOptions: [
                {id: 9, answerText: 'Apple', isCorrect: true },
                {id: 10, answerText: 'Intel', isCorrect: false },
                {id: 11, answerText: 'Amazon', isCorrect: false },
                {id: 12, answerText: 'Microsoft', isCorrect: false },
            ],
        },
        {
            questionText: 'How many Harry Potter books are there?',
            answerOptions: [
                {id: 13, answerText: '1', isCorrect: false },
                {id: 14, answerText: '4', isCorrect: false },
                {id: 15, answerText: '6', isCorrect: false },
                {id: 16, answerText: '7', isCorrect: true },
            ],
        },

        {
            questionText: 'Which country is the smallest in the world?',
            answerOptions: [
                {id: 17, answerText: 'Bahamas', isCorrect: false },
                {id: 18, answerText: 'Puerto Rico', isCorrect: false },
                {id: 19, answerText: 'Vaticano City', isCorrect: true },
                {id: 20, answerText: 'Monaco', isCorrect: false },
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





    /*spinner*/

    const loading = useLoading(1000);




    return(

        <>

            {
                loading ?
                    <PuffLoader className="spin-app" color={'#0B3C8D'} loading={loading} size={70}/>
                    :


                    <div className="app-quiz">


                        {/*Aqui pregunta si showscore es true y si es true muestra la puntuacion y si no, muestra las preguntas
            (esto es basicamente un if).*/}
                        {showScore ? (
                            <div className="score-section">You scored {score} out of {questions.length}
                                <button className="retry-btn" onClick={resetStateClick}>Retry</button>
                            </div>
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
                                        <button key={answerOption.id} className="button-quiz"
                                                onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                                    ))}
                                </div>
                            </>
                        )}

                    </div>

            }

                </>
    );
}
