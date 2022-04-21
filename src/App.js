import './App.css';
import DialogComponent from "./components/DialogComponent";


import Gallery from "./components/Gallery";
import TableForm from "./components/tables/TableForm";
import TableSorting from "./components/tables/TableSorting";
import axios from "axios";
import {useEffect, useState} from "react";



//Lo ideal es no tener mucho codigo en app. Lo que se debe de hacer en app es llamar los componentes aqui
function App() {

    const [users, setUsers] = useState([]);

    function obtenerUsuarios(){

        axios.get(`https://jsonplaceholder.typicode.com/users`).then(response => {

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




            <TableForm rows={users}/>

       {/*<TableSorting/>*/}



        </div>
    );
}

export default App;
