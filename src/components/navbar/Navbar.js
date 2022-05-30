import React from 'react';
import { Link } from "react-router-dom";
import './nav.css';


export default function Navbar(){


    return(


        <div className="sum">

            <div className="logo">
                Menu
            </div>

            <nav className="item02">
                <ul className="ul">

                    <li>
                        <Link to="/">Gallery</Link>
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
                        <Link to="/TableForm">Table-Form</Link>
                    </li>


                    <li >
                        <Link to="/DialogComponent">Dialog</Link>
                    </li>

                    <li>
                        <Link to="/WeatherApp">Weather</Link>
                    </li>

                </ul>
            </nav>

        </div>

    );
}
