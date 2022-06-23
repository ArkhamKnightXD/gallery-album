import React from 'react';
import Box from './Box';
import './board.css';


export default function Board({board, onClick}){

    return(


        <div className="board">

            {board.map((value, idx) => {
                return  <Box key={idx} value={value} onClick={() => value === null && onClick(idx)}/>
            })}


        </div>
    );
}
