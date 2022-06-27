import React, {useState} from "react";
import SimpleDialog from "./SimpleDialog";
import '../../App.css';
import '../../spinner.css';
import RingLoader from "react-spinners/RingLoader";
import useLoading from "../useLoading";
import Box from "@material-ui/core/Box";


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

                        <Box
                            sx={{
                                width: 300,
                                height: 170,
                                backgroundColor: '#FDE0AE',
                                paddingTop: '30px',
                                alignContent: 'center',
                                textAlign: 'center',

                                borderRadius: '20px'
                            }}

                        >

                            <h3 style={{marginTop: "4%"}}>Usted seleccionó: {selectedValue}</h3>

                            <button className="button" variant='outlined' color='primary' onClick={handleClickOpen}>
                                Open the Dart Dialog!
                            </button>

                            <SimpleDialog selectedValue={selectedValue} open={open} onClose={onClose}/>

                        </Box>

                    </div>
            }
        </>


    );
}


export default DialogComponent;
