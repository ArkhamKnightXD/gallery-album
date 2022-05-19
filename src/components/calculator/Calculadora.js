import {useState} from 'react';
import "./calculator.css";


export default function Calculadora() {

    const [calc, setCalc] = useState("");
    const [result, setResult] = useState("");
    const operations = ['/', '*', '+', '-', '.'];

    const createDigits = () => {
        const digits = [];

        for (let i = 1; i < 10; i++) {
            digits.push(
                <button key={i} onClick={() => updateCalc(i)} key={i}>{i}</button>
            )
        }
        return digits;
    }


    const updateCalc = value => {


        //La parte uno de la operacion verifica que si la pantalla esta en blanco y que la operacion sea una de las cuatro
        //basicas: /*-+, la segunda parte es para evitar que se pueda colocar dos signos seguidos, ej: ++,--
        if (operations.includes(value) && calc === '' || operations.includes(value) && operations.includes(calc.slice(-1)))
        {
            return;
        }
          //Aqui no se estan sumando los valores sino se esta juntando el texto.
        setCalc(calc + value);


        if (!operations.includes(value)) {
            setResult(eval(calc + value).toString());
        }
    }




    //Aqui se calcula los valores mediante eval y al final lo volvemos un string con el metodo .toString
    const calculate = () => {
        setCalc(eval(calc).toString());
    }

    const deleteLast = () => {
        if (calc === '') {
            return;
        }

        //Con .slice estoy quitando del arreglo el ultimo elemento
        const value = calc.slice(0, -1);

        setCalc(value);
    }







    return (
        <div className="App">

            <div className="calculator">
                <div className="display">
                    {result ? <span>({result})</span> : ""} &nbsp; {calc || "0"}
                </div>

                <div className="operators">
                    <button onClick={() => updateCalc('/')}>/</button>
                    <button onClick={() => updateCalc('*')}>*</button>
                    <button onClick={() => updateCalc('+')}>+</button>
                    <button onClick={() => updateCalc('-')}>-</button>

                    <button onClick={deleteLast}>DEL</button>
                </div>

                <div className="digits">
                    {createDigits()}
                    <button onClick={() => updateCalc('0')}>0</button>
                    <button onClick={() => updateCalc('.')}>.</button>
                    <button onClick={calculate}>=</button>
                </div>
            </div>


        </div>
    );
}
