import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

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


function TableForm({rows}) {

    const classes = useStyles();

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

                            </TableRow>

                        ))}

                    </TableBody>
                </Table>


            </TableContainer>


        </>

    );
}

export default TableForm;
