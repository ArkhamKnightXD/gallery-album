import './App.css';
import './index.css';
import {motion, AnimatePresence} from 'framer-motion';
import Images from "./components/slider/Images";
import {useRef, useEffect, useState} from 'react';
import DialogComponent from "./components/DialogComponent";
import Gallery from "./components/Gallery";
import TableForm from "./components/tables/TableForm";
import axios from "axios";

import DialogForm from "./components/DialogForm";
import {Button} from "@material-ui/core";
import FramerMotion from "./components/slider/FramerMotion";


function App() {

//     const [videojuegos, setVideojuegos] = useState([]);
//     const [videojuegoActual, setVideojuegoActual] = useState(null);
//     const [isOpen, setIsOpen] = useState(false);
//
//     function obtenerJuegos() {
// // get es para obtener elementos de la api
//         axios.get(`http://10.0.0.128:88/api/v1/video-games`).then(response => {
//
//             setVideojuegos(response.data);
//
//         });
//     }
//
//
//     const handleClickOpen = () => {
//
//         setIsOpen(true);
//     }
//
//
//
//     useEffect(() => {
//
//         obtenerJuegos();
//
//
//     }, []);

//}


// const [isOpen, setIsOpen] = useState([false])


    return (

//Lo ideal es no tener mucho codigo en app. Lo que se debe de hacer en app es llamar los componentes aqui

        <div className="App">

            {/*<Gallery/>*/}

            {/*<DialogComponent/>*/}

            {/*<TableSorting/>*/}

            {/*<ContactForm/>*/}


            {/*game-form*/}


            {/*<br/>*/}
            {/*            <DialogForm setData={setVideojuegos} videojuegoActual={videojuegoActual} isOpen={isOpen} setIsOpen={setIsOpen}*/}
            {/*            handleClickOpen={handleClickOpen}/>*/}


            {/*            <TableForm rows={videojuegos} setVideojuegos={setVideojuegos} setVideojuegoActual={setVideojuegoActual}*/}
            {/*                       handleClickOpen={handleClickOpen}/>*/}


            {/*framer-motion*/}

            {/*<motion.div transition={{layout: {duration: 1, type: "spring"}}} layout onClick={() => setIsOpen(!isOpen)}*/}
            {/*            className="card" style={{borderRadius: "1rem", boxShadow: "0px 10px 30px rgba(0,0,0,0.5)"}} >*/}

            {/*<motion.h2 layout="position">Framer Motion 🚀</motion.h2>*/}
            {/*    {isOpen && (*/}
            {/*    <motion.div>*/}
            {/*        <p initial={{opacity: 0}}*/}
            {/*           animate={{opacity: 1}}*/}
            {/*           transition={{duration: 1}}*/}
            {/*           exit={{opacity: 0}} className="expand">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum justo sed tempus aliquet.*/}
            {/*            Praesent luctus eleifend finibus. Pellentesque tincidunt.</p>*/}
            {/*        <p>turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet</p>*/}
            {/*        <Button className="button01">hide</Button>*/}
            {/*    </motion.div>*/}
            {/*    )}*/}


            <h1>React Slider</h1>
            <br/>
            <FramerMotion/>


        </div>

    );
}


export default App;
