import './App.css';
import DialogComponent from "./components/DialogComponent";
import Gallery from "./components/Gallery";
import TableForm from "./components/tables/TableForm";
import axios from "axios";
import {useEffect, useState} from "react";
import DialogForm from "./components/DialogForm";


//Lo ideal es no tener mucho codigo en app. Lo que se debe de hacer en app es llamar los componentes aqui
function App() {

    const [videojuegos, setVideojuegos] = useState([]);
    const [videojuegoActual, setVideojuegoActual] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    function obtenerJuegos() {
// get es para obtener elementos de la api
        axios.get(`http://10.0.0.128:88/api/v1/video-games`).then(response => {

            setVideojuegos(response.data);

        });
    }


    const handleClickOpen = () => {

        setIsOpen(true);
    }



    useEffect(() => {

        obtenerJuegos();


    }, []);


    return (


        <div className="App">
            {/*<Gallery/>*/}


            {/*<DialogComponent/>*/}


            {/*<TableSorting/>*/}


            {/*<ContactForm/>*/}

            <DialogForm setData={setVideojuegos} videojuegoActual={videojuegoActual} isOpen={isOpen} setIsOpen={setIsOpen}
            handleClickOpen={handleClickOpen}/>


            <TableForm rows={videojuegos} setVideojuegos={setVideojuegos} setVideojuegoActual={setVideojuegoActual}
                       handleClickOpen={handleClickOpen}/>


        </div>
    );
}

export default App;
