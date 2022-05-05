import react, {useState, useEffect} from 'react';
import Header from "./Header";
import Form from "./Form";
import List from "./List";
import '../../App.css';


export default function TodoList(){

const initialState = JSON.parse(localStorage.getItem("todos")) || [];
const [input, setInput] = useState("");
const [todos, setTodos] = useState([initialState]);
const [editTodo, setEditTodo] = useState(null);


useEffect(() =>{
    localStorage.setItem("todos", JSON.stringify(todos));
},[todos]);

    return(


        <div className="container">
            <div className="app-wrapper">
              <div>
                  <Header/>
              </div>
                <div>
                    <Form input={input} setInput={setInput} todos={todos} setTodos={setTodos} editTodo={editTodo} setEditTodo={setEditTodo}/>
                </div>
                <div>
                    <List todos={todos} setTodos={setTodos}  setEditTodo={setEditTodo}/>
                </div>
            </div>



        </div>
    );
}
