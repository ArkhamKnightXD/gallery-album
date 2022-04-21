import './App.css';
import DialogComponent from "./components/DialogComponent";


import Gallery from "./components/Gallery";
import TableForm from "./components/tables/TableForm";
import TableSorting from "./components/tables/TableSorting";
import axios from "axios";
import {useEffect, useState} from "react";
import ContactForm from "./components/ContactForm";
import DialogForm from "./components/DialogForm";



//Lo ideal es no tener mucho codigo en app. Lo que se debe de hacer en app es llamar los componentes aqui
function App() {

    const [users, setUsers] = useState([]);



    const [data, setData] = useState([

        {name: "GTA5", genre: "Fighting", developer: "Rockstar Games", gameModes: "single-player, multiplayer"},
        {name: "Fornite", genre: "Fighting", developer: "Epic Games", gameModes: "single-player, multiplayer"}
    ]);


    function obtenerUsuarios(){

        axios.get(`http://10.0.0.128:88/api/v1/video-games`).then(response => {

            console.log("Datos:", response.data);


            setUsers(response.data);
        })
    }


    useEffect(() => {

        obtenerUsuarios();



    }, []);



    return (


        <div className="App">
            {/*<Gallery/>*/}



            {/*<DialogComponent/>*/}






       {/*<TableSorting/>*/}


            {/*<ContactForm/>*/}

        <DialogForm setData={setUsers} data={data} />


            <TableForm rows={users}/>


        </div>
    );
}

export default App;
