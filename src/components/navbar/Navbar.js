import React from 'react';
import { Link } from "react-router-dom";
import './nav.css';


export default function Navbar(){


    return(


        <div style={{position: "fixed", top:0, left: 0, zIndex:5, width: "100%", overflow: "hidden"}}  className="sum">

            {/*<div className="logo">*/}
            {/*    Menu*/}
            {/*</div>*/}

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

                    <li>
                        <Link to="/Main">Movies</Link>
                    </li>

                    <li>
                        <Link to="/Form">Form</Link>
                    </li>

                    <li>
                        <Link to="/Tictac">Tic-Tac-Toe</Link>
                    </li>

                    <li>
                        <Link to="/RockPaperScissors">Roc-Paper-Sci</Link>
                    </li>




                      {/*<li>*/}
                      {/*   Others ˅*/}
                      {/*        <ul className="drop">*/}

                      {/*            <li>*/}
                      {/*                <Link to="/QuizApp">QuizApp</Link>*/}
                      {/*            </li>*/}


                      {/*            <li>*/}
                      {/*                <Link to="/Tictac">Tic-Tac-Toe</Link>*/}
                      {/*            </li>*/}

                      {/*            <li>*/}
                      {/*                <Link to="/RockPaperScissors">Roc-Paper-Sci</Link>*/}
                      {/*            </li>*/}


                      {/*        </ul>*/}
                      {/*</li>*/}


                </ul>
            </nav>

        </div>

    );
}
