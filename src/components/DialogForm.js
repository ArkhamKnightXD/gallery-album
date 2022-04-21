import DialogTitle from "@material-ui/core/DialogTitle";

import Dialog from "@material-ui/core/Dialog";
import React, {useState} from "react";
import {Button} from "@material-ui/core";
import ContactForm from "./ContactForm";


export default function DialogForm({setData, data}) {

    const [isOpen, setIsOpen] = useState(false);

    //esta funcion muestra un mensaje de lo que elegiste
    const handleClose = () => {

        setIsOpen(false);
    }


    const handleClickOpen = () => {

        setIsOpen(true);
    }


    return (

        <>

            <Button className="button" variant='outlined' color='primary' onClick={handleClickOpen}>
                Agregar Juego
            </Button>

            <Dialog onClose={handleClose} open={isOpen}>

                    <ContactForm setData={setData} data={data} handleClose={handleClose}/>

            </Dialog>
        </>


    );
}
