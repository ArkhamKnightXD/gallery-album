import React, {useState} from "react";
import SimpleDialog from "./SimpleDialog";
import '../../App.css';

function DialogComponent() {

    const [open, setOpen] = useState(false)
    const [selectedValue, setSelectedValue] = useState('')

   //esta funcion se encarga de abrir el dialog
    const handleClickOpen = () => {
        setOpen(true)
    }

  //esta funcion se encarga de cerrar el dialog y actualizar el valor seleccionado
    const onClose = (value) => {

        setOpen(false)
        setSelectedValue(value)
    }

    return (

        <div className="app-dialog">


            <h3 style={{marginTop: "4%"}}>Usted seleccionó: {selectedValue}</h3>

            <button className="button" variant='outlined' color='primary' onClick={handleClickOpen}>
                Open the Dart Dialog!
            </button>

            <SimpleDialog selectedValue={selectedValue} open={open} onClose={onClose}/>



        </div>
    );
}










export default DialogComponent;
