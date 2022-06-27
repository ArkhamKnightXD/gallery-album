import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import React from "react";
import {List} from "@material-ui/core";
import FastFoodIcon from '@material-ui/icons/Fastfood';


function SimpleDialog(props) {

    const {onClose, selectedValue, open} = props


    const menu = [
        {id: 0, name:'helado'},
        {id:1, name: 'pizza'},
        {id:2, name:'hot dog'},
        {id:3, name:'cupcake'},
        {id:4, name:'bizcocho'},
        {id:5, name:'nachos'},
        {id:6, name:'palomitas'},
        {id:7, name:'tacos'},
        {id:8, name: 'brownie'}
    ];

    //esta funcion muestra un mensaje de lo que elegiste
    const handleClose = () => {

         alert(selectedValue)
        onClose(selectedValue)
    }

    //esta funcion envia el valor seleccionado y llama la funcion que cierra el dialog
    const handleListItemClick = (value) => {

        onClose(value)
    }

    return (
        <>
            {/*En el parametro open se le indica al dialog si esta abierto o cerrado
            en onClose se indica la funcion encargada de cerrar el dialog*/}
            <Dialog onClose={handleClose} open={open}>


                <DialogTitle style={{color: "black"}}>Elige:</DialogTitle>

                <List>

                    {menu.map(menu =>(
                        <ListItem button key={menu.id} onClick={() => handleListItemClick(menu.name)}>
                            <ListItemAvatar>
                                <Avatar>
                                    <FastFoodIcon/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText style={{color: "#000"}} primary={menu.name}/>
                        </ListItem>
                    ))}


                </List>
            </Dialog>
        </>
    );

}

export default SimpleDialog;
