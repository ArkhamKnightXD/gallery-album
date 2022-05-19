import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import './nav.css';
import QuizApp from "../quiz/QuizApp";
import FramerMotion from "../slider/FramerMotion";
import CardAnimation from "../card-animation/CardAnimation";
import Calculadora from "../calculator/Calculadora";
import TodoList from "../todolist/TodoList";
import Gallery from "../Gallery";
import TableSorting from "../tables/TableSorting";
import WeatherApp from "../weather/WeatherApp";
import DialogComponent from "../forms/DialogComponent";

export default function Navbar(){


    return(


        <div className="sum">

            <div className="logo">
                Menu
            </div>

            <nav className="item">
                <ul className="ul">

                    <li>
                        <Link to="/">Home</Link>
                    </li>

                    <li>
                        <Link to="/Gallery">Gallery</Link>
                    </li>

                    <li>
                        <Link to="/QuizApp">QuizApp</Link>
                    </li>

                    <li>
                        <Link to="/FramerMotion">Framer-Motion</Link>
                    </li>

                    <li>
                        <Link to="/CardAnimation">Card-Animation</Link>
                    </li>

                    <li>
                        <Link to="/Calculadora">Calculator</Link>
                    </li>

                    <li>
                        <Link to="/TodoList">To do List</Link>
                    </li>


                    <li >
                        <Link to="/DialogComponent">Dialog</Link>
                    </li>

                    <li>
                        <Link to="/WeatherApp">Weather</Link>
                    </li>

                    <li>
                        <Link to="/TableSorting">Table-Sorting</Link>
                    </li>

                </ul>
            </nav>

        </div>

    );
}
