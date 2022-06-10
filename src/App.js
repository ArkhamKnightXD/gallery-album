// import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
//import './index.css';
import React from 'react';

import DialogComponent from "./components/forms/DialogComponent";
import Gallery from "./components/Gallery";
import TableForm from "./components/videogames/TableForm";

import FramerMotion from "./components/slider/FramerMotion";
import CardAnimation from "./components/card-animation/CardAnimation";
import Calculadora from "./components/calculator/Calculadora";
import WeatherApp from "./components/weather/WeatherApp";
import QuizApp from "./components/quiz/QuizApp";
import Navbar from "./components/navbar/Navbar";
import Main from "./components/filtering/Main";


function App() {



    return (

//Lo ideal es no tener mucho codigo en app. Lo que se debe de hacer en app es llamar los componentes aqui



        <>

            <Router>

                <Navbar/>

                <Routes>


                    <Route path="/" element={<Gallery/>}/>
                    <Route path="/quizapp" element={<QuizApp/>}/>
                    <Route path="/framermotion" element={<FramerMotion/>}/>
                    <Route path="/cardanimation" element={<CardAnimation/>}/>
                    <Route path="/calculadora" element={<Calculadora/>}/>
                    <Route path="/tableform" element={<TableForm/>}/>
                    <Route path="/weatherapp" element={<WeatherApp/>}/>
                    <Route path="/dialogcomponent" element={<DialogComponent/>}/>
                    <Route path="/main" element={<Main/>}/>

                </Routes>


            </Router>









        </>



    );
}





export default App;
