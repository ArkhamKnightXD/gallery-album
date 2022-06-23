import './scoreboard.css';

export default function ScoreBoard({scores, xPlaying}){

    const {xScore, oScore} = scores;

    return(


    <div className="scoreboard">
        {/*Dependiendo de cual jugador esta jugando se habilitara la clase inactive, cuando x este jugando o estara inactivo y viceversa.*/}
        <span className={`score x-score ${!xPlaying && "inactive"}`}>X - {xScore}</span>
        <span className={`score o-score ${xPlaying && "inactive"}`}>O - {oScore}</span>
    </div>

    )
}
