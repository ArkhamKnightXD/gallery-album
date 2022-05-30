// import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
//import './index.css';
import {motion, AnimatePresence} from 'framer-motion';
import Images from "./components/slider/Images";
import React, {useRef, useEffect, useState} from 'react';

import DialogComponent from "./components/forms/DialogComponent";
import Gallery from "./components/Gallery";
import TableForm from "./components/videogames/TableForm";
import axios from "axios";

import DialogForm from "./components/videogames/DialogForm";
import {Button} from "@material-ui/core";
import FramerMotion from "./components/slider/FramerMotion";
import CardAnimation from "./components/card-animation/CardAnimation";
import TableSorting from "./components/tables/TableSorting";
import Calculadora from "./components/calculator/Calculadora";
import Header from "./components/todolist/Header";
import TodoList from "./components/todolist/TodoList";
import WeatherApp from "./components/weather/WeatherApp";
import QuizApp from "./components/quiz/QuizApp";
import About from "./About";
import Profile from "./Profile";
import ErrorPage from "./ErrorPage";
import Home from "./Home";
import Navbar from "./components/navbar/Navbar";


function App() {



    return (

//Lo ideal es no tener mucho codigo en app. Lo que se debe de hacer en app es llamar los componentes aqui



        <>
            {/*<QuizApp/>*/}

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

                </Routes>


            </Router>









        </>



    );
}





            {/*<Gallery/>*/}

            {/*<DialogComponent/>*/}

            {/*<TableSorting/>*/}


            {/*game-form*/}


            {/*<br/>*/}
            {/*            <DialogForm setData={setVideojuegos} videojuegoActual={videojuegoActual} isOpen={isOpen} setIsOpen={setIsOpen}*/}
            {/*            handleClickOpen={handleClickOpen}/>*/}


            {/*            <TableForm rows={videojuegos} setVideojuegos={setVideojuegos} setVideojuegoActual={setVideojuegoActual}*/}
            {/*                       handleClickOpen={handleClickOpen}/>*/}


            {/*framer-motion*/}

            {/*Si una variable que esta en true, tiene un ! , pasara a ser falso, y viceversa.*/}


            {/*<h1>React Slider</h1>*/}
            {/*<br/>*/}
            {/*<FramerMotion/>*/}


            {/*<CardAnimation/>*/}


            {/*<Calculadora/>*/}


            {/*falta terminar*/}
            {/*<TodoList/>*/}


            {/*<WeatherApp/>*/}


            {/*<QuizApp/>*/}

        // </Router>




export default App;
