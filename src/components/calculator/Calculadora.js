import {useState} from 'react';
import {ruRU} from "@material-ui/core/locale";
import "../../index.css";


export default function Calculadora() {

    const [calc, setCalc] = useState("");
    const [result, setResult] = useState("");

    const createDigits = () => {
        const digits = [];

        for (let i = 1; i < 10; i++) {
            digits.push(
                <button key={i} onClick={() => updateCalc(i)} key={i}>{i}
                </button>
            )
        }
        return digits;
    }

    const calculate = () => {
        setCalc(eval(calc).toString());
    }

    const deleteLast = () => {
        if (calc === '') {
            return;
        }

        const value = calc.slice(0, -1);

        setCalc(value);
    }




    const operations = ['/', '*', '+', '-', '.'];

    const updateCalc = value => {

        console.log(value);
        if (
            operations.includes(value) && calc === '' || operations.includes(value) && operations.includes(calc.slice(-1))
        )
        {
            return;
        }

        setCalc(calc + value);


        if (!operations.includes(value)) {
            setResult(eval(calc + value).toString());
        }
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
