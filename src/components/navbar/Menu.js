import React from 'react';
import './menu.css';


export default function Menu(){


    return(
<>

    <div className="menu"></div>

    <nav className="nav">
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Codes</a>
                <ul>
                    <li><a href="#">HTML 5</a></li>
                    <li><a href="#">CSS 3</a></li>
                    <li><a href="#">JavaScript</a></li>
                </ul>
            </li>
            <li><a href="#">Projects</a>
                <ul>
                    <li><a href="#">Project 1</a></li>
                    <li><a href="#">Project 2</a></li>
                    <li><a href="#">Project 3</a></li>
                </ul>
            </li>
            <li><a href="#">Contact</a></li>
            <li><a href="https://webdevtrick.com" target="_blank">About</a></li>
        </ul>
    </nav>

</>
    );
}
