// import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
//import './index.css';
import {motion, AnimatePresence} from 'framer-motion';
import Images from "./components/slider/Images";
import {useRef, useEffect, useState} from 'react';

import DialogComponent from "./components/forms/DialogComponent";
import Gallery from "./components/Gallery";
import TableForm from "./components/tables/TableForm";
import axios from "axios";

import DialogForm from "./components/forms/DialogForm";
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


function App() {

//     const [videojuegos, setVideojuegos] = useState([]);
//     const [videojuegoActual, setVideojuegoActual] = useState(null);
//     const [isOpen, setIsOpen] = useState(false);
//
//     function obtenerJuegos() {
// // get es para obtener elementos de la api
//         axios.get(`http://10.0.0.128:88/api/v1/video-games`).then(response => {
//
//             setVideojuegos(response.data);
//
//         });
//     }
//
//
//     const handleClickOpen = () => {
//
//         setIsOpen(true);
//     }
//
//
//
//     useEffect(() => {
//
//         obtenerJuegos();
//
//
//     }, []);





    return (

//Lo ideal es no tener mucho codigo en app. Lo que se debe de hacer en app es llamar los componentes aqui

        <Router>

       <nav>
           <Link to="/">Home</Link>
           <Link to="/About">About</Link>
           <Link to="/Profile">Profile</Link>

       </nav>
<Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/About" element={<About/>}/>
    <Route path="/Profile" element={<Profile/>}/>
    <Route path="*" element={<ErrorPage/>}/>
<div>Footer</div>
</Routes>
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

        </Router>

    );
}


export default App;
