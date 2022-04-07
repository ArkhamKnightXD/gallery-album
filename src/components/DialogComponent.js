import React, {useState} from "react";
import SimpleDialog from "./SimpleDialog";


function DialogComponent() {

    const [open, setOpen] = useState(false)
    const [selectedValue, setSelectedValue] = useState('')


    const handleClickOpen = () => {
        setOpen(true)
    }


    const handleClose = (value) => {
        setOpen(false)
        setSelectedValue(value)
    }

    return (

        <>


            <h3>Usted seleccionó: {selectedValue}</h3>

            <button variant='outlined' color='primary' onClick={handleClickOpen}>
                Open the Dart Dialog!
            </button>

            <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose}/>



        </>
    );
}


export default DialogComponent;
