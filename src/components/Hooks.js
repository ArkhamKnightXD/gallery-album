import useCounter from "./useCounter";

export default function Hooks() {

    const counterA = useCounter();
    const counterB = useCounter();

    return (


        <div>
            <div style={{color: 'black'}}>{counterA.counter}</div>
            <button style={{color: 'black'}} onClick={counterA.increase}>+</button>
            <button style={{color: 'black'}} onClick={counterA.decrement}>-</button>
            <button style={{color: 'black'}} onClick={counterA.reset}>Reset</button>

            <div style={{color: 'black'}}>{counterB.counter}</div>
            <button style={{color: 'black'}} onClick={counterB.increase}>+</button>
            <button style={{color: 'black'}} onClick={counterB.decrement}>-</button>
            <button style={{color: 'black'}} onClick={counterB.reset}>Reset</button>

        </div>
    );
}
