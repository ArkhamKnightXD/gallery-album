import React, {useEffect, useState} from 'react';
import './paper.css';
import {Button} from "@material-ui/core";
import '../../spinner.css';
import SkewLoader from "react-spinners/SkewLoader";
import useLoading from "../useLoading";
import Box from "@material-ui/core/Box";
import {Note} from "@material-ui/icons";
import {Brightness1} from "@material-ui/icons";
import {LocalDining} from "@material-ui/icons";
import Icons from "./Icons";

//hacer un componente que retorne uno de los 3 iconos referentes a piedra, papel, y tijera.

export default function RockPaperScissors(){

    const [userChoice, setUserChoice] = useState('null')
    const [computerChoice, setComputerChoice] = useState('null')
    const [result, setResult] = useState(null)
    const choices = ['rock', 'paper', 'scissors']


const handleClick = (value) => {
    setUserChoice(value)
    generateComputerChoice()

}

const generateComputerChoice = () => {
        const randomChoice = choices[Math.floor(Math.random() * choices.length)]
        setComputerChoice(randomChoice)
}

    const icons = [
        Note,
        Brightness1,
        LocalDining
    ]


useEffect(() => {


    switch (userChoice + computerChoice) {
        case 'scissorspaper':
        case 'rockscissors':
        case 'paperrock':
            setResult('YOU WIN!')


            break
        case 'paperscissors':
        case 'scissorsrock':
        case 'rockpaper':
            setResult('YOU LOSE!')

            break
        case 'rockrock':
        case 'paperpaper':
        case 'scisssorsscissors':
            setResult('ITS A DRAW!')
            break

    }
}, [computerChoice, userChoice])


    /*spinner*/
    const loading = useLoading(1000);

    // const Icon = icons[index];

    return(
<>
        {
            loading ?
                <SkewLoader className="spin-app" color={'#0B3C8D'} loading={loading} size={40}/>
                :
        <div>
            <Box
                sx={{
                    width: 500,
                    height: 260,
                    backgroundColor: '#030202',
                    paddingTop: '20px',
                    alignContent: 'center',
                    textAlign: 'center',
                    borderRadius: '20px'
                }}
            >

            <h1 className="h1-user">user choice is: {userChoice} </h1>
            <br/>
            <h1 className="h1-user2">computer choice is: {computerChoice} </h1>
            <br/>
            <br/>

            {choices.map((choice,index) =>
                <Button color="primary"
                variant="contained"
                startIcon={<Icons choice={choice}/>}
                style={{ marginLeft: '30px',textAlign: 'justify'}}
                key={index} onClick = {() => handleClick(choice)}>{choice}</Button>


            )}

            <br/>
            <br/>
            <br/>

            {result === "YOU WIN!" && (

                <h1 style={{ margin: '0 100px', color: 'green'}}>{result}</h1>
            )}

            {result === "YOU LOSE!" && (

                <h1 style={{ margin: '0 100px', color: 'red'}}>{result}</h1>
            )}

            {result === "ITS A DRAW!" && (

                <h1 style={{ margin: '0 100px', color: 'black'}}>{result}</h1>
            )}

            </Box>

        </div>
            }
                </>
    );
}
