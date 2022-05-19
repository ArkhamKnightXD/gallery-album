import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Gallery from "./components/Gallery";
import QuizApp from "./components/quiz/QuizApp";
import FramerMotion from "./components/slider/FramerMotion";
import CardAnimation from "./components/card-animation/CardAnimation";
import Calculadora from "./components/calculator/Calculadora";
import TodoList from "./components/todolist/TodoList";
import TableSorting from "./components/tables/TableSorting";
import WeatherApp from "./components/weather/WeatherApp";
import DialogComponent from "./components/forms/DialogComponent";

ReactDOM.render(


    <App/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
