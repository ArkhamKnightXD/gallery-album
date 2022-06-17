import React, {useState} from "react";
import SimpleDialog from "./SimpleDialog";
import '../../App.css';


import '../../spinner.css';
import { useEffect } from "react";
import RingLoader from "react-spinners/RingLoader";
import useLoading from "../useLoading";

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




    /*spinner*/

    const loading = useLoading(1000);





    return (

        <>
            {
                loading ?
                    <RingLoader className="spin-app" color={'#0B3C8D'} loading={loading} size={60}/>
                    :
                    <div className="app-dialog">


                        <h3 style={{marginTop: "4%"}}>Usted seleccionó: {selectedValue}</h3>

                        <button className="button" variant='outlined' color='primary' onClick={handleClickOpen}>
                            Open the Dart Dialog!
                        </button>

                        <SimpleDialog selectedValue={selectedValue} open={open} onClose={onClose}/>


                    </div>
            }
    </>




    );
}



export default DialogComponent;
