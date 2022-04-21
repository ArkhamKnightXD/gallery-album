import React, {useState} from "react";
import {Button, Card, CardContent, TextField, Typography, Grid, Select, InputLabel} from "@material-ui/core";
import axios from "axios";


export default function ContactForm({setData, data, handleClose}) {

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



    function guardarUsuarios(data){

        axios.post(`http://10.0.0.128:88/api/v1/video-games`, data).then(r => {
            setData(r.data);
        });
    }



    const handleSubmit = (event) =>{
        event.preventDefault();


        const userData = {name,genre,developer,gameModes};

        guardarUsuarios(userData);

        handleClose();
    }





    return (

        <>

            <Typography gutterBottom variant="h3" align="center" style={{marginTop: "15px"}}>
                Games-Form
            </Typography>

            <Card style={{maxWidth: 450, margin: "0 auto", padding: "20px 5px"}}>

                <form onSubmit={handleSubmit}>
                    <CardContent>

                        <Grid container spacing={1}>

                            <Grid xs={12} sm={6} item>
                                <TextField style={{marginTop: "7%"}}  value={name} onChange={handleNameChange} label="Name" placeholder="Enter name" variant="outlined" fullWidth
                                           required/>
                            </Grid>

                            <Grid xs={12} sm={6} item>

                                <InputLabel >Genre</InputLabel>
                                <Select  value={genre} onChange={handleGenreChange}  label="Genre" placeholder="Enter genre" variant="outlined"
                                      fullWidth required>
                                    <option value="" disabled selected >Select Genre</option>
                                    <option value="Fighting">Fighting</option>
                                    <option value="Hack">Hack</option>
                                    <option value="Adventure">Adventure</option>
                                    <option value="JRPG">JRPG</option>
                                    <option value="Sports">Sports</option>
                                    <option value="Simulation">Simulation</option>
                                </Select>
                            </Grid>

                            <Grid xs={12} item>

                                <TextField value={developer} onChange={handleDeveloperChange}  label="Developer" placeholder="Enter developer"
                                        variant="outlined" fullWidth required/>
                            </Grid>

                            <Grid xs={12} item>

                                <TextField value={gameModes} onChange={handleGameModesChange} label="Game Modes" placeholder="Enter game modes"
                                           variant="outlined" fullWidth required/>

                            </Grid>

                            <Grid xs={12} item>
                                <Button type="submit" variant="contained" color="primary" fullWidth>Add</Button>
                            </Grid>
                        </Grid>
                    </CardContent>
                </form>
            </Card>

        </>

    );
}
