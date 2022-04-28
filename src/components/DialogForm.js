import Dialog from "@material-ui/core/Dialog";
import React, {useEffect, useState} from "react";
import {Button, Card, CardContent, Grid, InputLabel, Select, TextField, Typography} from "@material-ui/core";
import axios from "axios";


export default function DialogForm({setData, videojuegoActual, handleClickOpen, isOpen, setIsOpen}) {

    //estados
    const [name, setName] = useState("");
    const [genre, setGenre] = useState("");
    const [developer, setDeveloper] = useState("");
    const [gameModes, setGameModes] = useState("");


    const handleNameChange = event => {

        setName(event.target.value);
    }


    const handleGenreChange = event => {

        setGenre(event.target.value);
    }

    const handleDeveloperChange = event => {

        setDeveloper(event.target.value);
    }

    const handleGameModesChange = event => {

        setGameModes(event.target.value);
    }


    function guardarJuegos(data) {

        //post es para insertar elementos en el api
        axios.post(`http://10.0.0.128:88/api/v1/video-games`, data).then(r => {
            setData(r.data);
        });
    }

    function actualizarJuego(data) {

        //post es para insertar elementos en el api
        axios.put(`http://10.0.0.128:88/api/v1/video-games`, data).then(r => {
            setData(r.data);
        });
    }

    //funcion hace que se realize la funcion actualizar al dar click al boton add
    const handleSubmit = (event) => {
        event.preventDefault();

        let juegosData;

        if (videojuegoActual){

            juegosData = {id: videojuegoActual.id, name, genre, developer, gameModes};

            actualizarJuego(juegosData);
        }

        else {
            juegosData = {name, genre, developer, gameModes};

            guardarJuegos(juegosData);
        }

        handleClose();
    }


    useEffect(() => {

        if (videojuegoActual) {

            setName(videojuegoActual.name);

            setGenre(videojuegoActual.genre);

            setDeveloper(videojuegoActual.developer);

            setGameModes(videojuegoActual.gameModes);
        }

    }, [videojuegoActual]);


    //esta funcion cierra y limpia los campos
    const handleClose = () => {

        setIsOpen(false);

        setName("");

        setGenre("");

        setDeveloper("");

        setGameModes("");
    }


    return (

        <>

            <Button className="button" variant='outlined' color='primary' onClick={handleClickOpen}>
                Agregar Juego
            </Button>

            <Dialog onClose={handleClose} open={isOpen}>


                <Typography gutterBottom variant="h3" align="center" style={{marginTop: "15px"}}>
                    Games-Form
                </Typography>

                <Card style={{maxWidth: 450, margin: "0 auto", padding: "20px 5px"}}>

                    <form onSubmit={handleSubmit}>
                        <CardContent>

                            <Grid container spacing={1}>

                                <Grid xs={12} sm={6} item>
                                    <TextField style={{marginTop: "7%"}} value={name} onChange={handleNameChange}
                                               label="Name" placeholder="Enter name" variant="outlined" fullWidth
                                               required/>
                                </Grid>

                                <Grid xs={12} sm={6} item>

                                    <InputLabel>Genre</InputLabel>
                                    <Select value={genre} onChange={handleGenreChange} label="Genre"
                                            placeholder="Enter genre" variant="outlined"
                                            fullWidth required>
                                        <option value="" disabled selected>Select Genre</option>
                                        <option value="Fighting">Fighting</option>
                                        <option value="Hack">Hack</option>
                                        <option value="Adventure">Adventure</option>
                                        <option value="JRPG">JRPG</option>
                                        <option value="Sports">Sports</option>
                                        <option value="Simulation">Simulation</option>
                                    </Select>
                                </Grid>

                                <Grid xs={12} item>

                                    <TextField value={developer} onChange={handleDeveloperChange} label="Developer"
                                               placeholder="Enter developer"
                                               variant="outlined" fullWidth required/>
                                </Grid>

                                <Grid xs={12} item>

                                    <InputLabel>Game Modes</InputLabel>
                                    <Select value={gameModes} onChange={handleGameModesChange} label="Game Modes"
                                            placeholder="Enter game modes"
                                            variant="outlined" fullWidth required>
                                        <option value="" disabled selected>Select Game Mode</option>
                                        <option value="Single-player">Single-player</option>
                                        <option value="Multiplayer">Multiplayer</option>
                                        <option value="Single-player, multiplayer">Single-player, multiplayer</option>
                                    </Select>

                                </Grid>

                                <Grid xs={12} item>
                                    <Button type="submit" variant="contained" color="primary" fullWidth>Add</Button>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </form>
                </Card>

            </Dialog>
        </>


    );
}
