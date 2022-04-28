import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import {Button} from "@material-ui/core";
import axios from "axios";

//Esta es una forma de dar estilos en react. Esto indica que la tabla va a tener un ancho minimo de 650px.
const useStyles = makeStyles({
    table: {
        minWidth: 650,
        marginTop: 10
    }
});

//Aqui definimos un objeto con propiedades css.
const headerStyle = {

    fontWeight: "bold"
}


function TableForm({rows , setVideojuegos, setVideojuegoActual, handleClickOpen}) {

    const classes = useStyles();

    //delete sirve para borrar elementos del api
    function deleteJuego(videogameID){

        axios.delete(`http://10.0.0.128:88/api/v1/video-games/${videogameID}`).then(response => {

            setVideojuegos(response.data);

        });

    }


    function obtenerJuegoactual(videogameID){

        axios.get(`http://10.0.0.128:88/api/v1/video-games/${videogameID}`).then(response => {

            setVideojuegoActual(response.data);


        });
        handleClickOpen();
    }



    return (

        <>

            <TableContainer >

                <Table className={classes.table} aria-label="simple-table">

                    {/*una tabla esta dividida en dos partes: tablehead y tablebody, tablehead se refiere al encabezado
                    de la tabla y es donde se indica los nombres que tienen los datos.

                    */}
                    <TableHead>
                        {/*Estos son los elementos del encabezado de la tabla, siempre van definidos dentro de un tablerow
                        tablerow te pone todos los elementos en una fila*/}
                        <TableRow>

                            {/*Para indicar propiedades css, lo hacemos mediante parametros style.*/}
                            <TableCell style={headerStyle}>Name</TableCell>
                            <TableCell style={headerStyle} align="center">Genre</TableCell>
                            <TableCell style={headerStyle} align="center">Developer</TableCell>
                            <TableCell style={headerStyle} align="right">Game Modes</TableCell>
                            <TableCell style={headerStyle} align="center">Options</TableCell>
                        </TableRow>

                    </TableHead>

                    {/*Este es la segunda parte de la tabla, aqui es donde se muestra los distintos datos, normalmente
                    es una lista a la que se le aplica el metodo map.*/}
                    <TableBody>

                        {rows.map((row) => (

                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="center">{row.genre}</TableCell>
                                <TableCell align="center">{row.developer}</TableCell>
                                <TableCell align="right">{row.gameModes}</TableCell>
                                <TableCell align="center">

                                    {/*si queremos ejecutar una funcion con parametros en el onclick, debemos de implementar
                                    de la sigte forma: onClick={() => deleteJuego(row.id)}, sino se hace de esta forma
                                    esta funcion se ejecutara siempre lo cual dara un error.*/}

                                    <Button variant='outlined' color="secondary" onClick={() => deleteJuego(row.id)}>
                                       DELETE
                                    </Button>
                                    &nbsp;&nbsp;&nbsp;
                                    <Button  variant='outlined' color="inherit" onClick={() => obtenerJuegoactual(row.id)}
                                             style={ {color: "#DBA800", borderColor: "#DBA800" }}>
                                        UPDATE
                                    </Button>
                                </TableCell>
                            </TableRow>

                        ))}

                    </TableBody>
                </Table>


            </TableContainer>


        </>

    );
}

export default TableForm;
