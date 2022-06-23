import './tictac.css';
import React, {useState} from 'react';
import Board from "./Board";
import ScoreBoard from "./ScoreBoard";
import DeleteButton from "./DeleteButton";
import '../../spinner.css';
import PropagateLoader from "react-spinners/PropagateLoader";
import useLoading from "../useLoading";

export default function Tictac() {

    //esas son las multiples condiciones de victoria.
    const WIN_CONDITIONS = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]


    const [board, setBoard] = useState(Array(9).fill(null));
    const [xPlaying, setXPlaying] = useState(true);
    const [scores, setScores] = useState({xScore: 0, oScore: 0})
    const [gameOver, setGameOver] = useState(false)





    //esta funcion se encarga de llenar los cuadros con X o con O dependiendo el turno del jugador. tambien se encarga
    //de llamar a la funcion checkwinner.
    const handleBoxClick = (boxIdx) => {
        const updateBoard = board.map((value, idx) => {
            if (idx === boxIdx) {
                return xPlaying === true ? "X" : "O";
            } else {
                console.log('value:', value)
                return value;
            }
        })

        const winner = checkWinner(updateBoard);

        //actualiza el score del juego.
        updateScore(winner);

        setBoard(updateBoard);

        setXPlaying(!xPlaying);


    }

    //esta funciona se encarga de verificar que se cumpla una de las multiples condiciones de victoria.
    const checkWinner = (board) => {
        for (let i = 0; i < WIN_CONDITIONS.length; i++) {
            const [x, y, z] = WIN_CONDITIONS[i];

            if (board[x] && board[x] === board[y] && board[y] === board[z]) {
                setGameOver(true)
                return board[x];
            }
        }
    }

    // esta funcion se encarga de resetear cuando x / o gana. y tambien limpia el tablero.
    const resetBoard = () => {
        setGameOver(false);
        setBoard(Array(9).fill(null))
    }

    const resetScore = () => {
        setScores({xScore: 0, oScore: 0})
        resetBoard();
    }

    const updateScore = (winner) => {

        if (winner) {
            if (winner === "O") {

                let {oScore} = scores;
                oScore += 1
                setScores({...scores, oScore})

            } else {

                let {xScore} = scores;
                xScore += 1
                setScores({...scores, xScore})

            }
        }
    }


    /*spinner*/
    const loading = useLoading(1000);


    return (

        <>
            {
                loading ?
                    <PropagateLoader className="spin-app" color={'#0B3C8D'} loading={loading} size={20}/>
                    :

                    <div className="app-tic">


                        <ScoreBoard scores={scores} xPlaying={xPlaying}/>
                        <Board board={board} onClick={gameOver ? resetBoard : handleBoxClick}/>
                        <DeleteButton resetBoard={resetBoard}/>
                        <button className="new-btn" onClick={resetScore}>New Game</button>


                    </div>

            }
        </>
    );
}
