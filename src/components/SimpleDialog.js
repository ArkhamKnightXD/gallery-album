import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import React from "react";
import PersonIcon from '@material-ui/icons/Person';
import {List} from "@material-ui/core";


function SimpleDialog(props) {

    const {onClose, selectedValue, open} = props


    const menu = ['helado', 'pizza', 'hot dog', 'cheese burger', 'bizcocho', 'nachos'];

    const handleClose = () => {

         alert(selectedValue)
        onClose(selectedValue)
    }

    const handleListItemClick = (value) => {

        onClose(value)
    }

    return (
        <>
            {/*En el parametro open se le indica al dialog si esta abierto o cerrado
            en onClose se indica la funcion encargada de cerrar el dialog*/}
            <Dialog onClose={handleClose} open={open}>


                <DialogTitle>Elige:</DialogTitle>

                <List>

                    {menu.map(menu =>(
                        <ListItem button onClick={() => handleListItemClick(menu)}>
                            <ListItemAvatar>
                                <Avatar>
                                    <PersonIcon/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={menu}/>
                        </ListItem>
                    ))}


                </List>
            </Dialog>
        </>
    );

}

export default SimpleDialog;
