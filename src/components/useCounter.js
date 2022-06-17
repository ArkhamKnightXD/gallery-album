import {useState} from "react";

//esto es un custom hook, un hook es parecido a un componente pero este solo retorna codigo js a diferencia de los
//componentes que retornan html junto con codigo js. Los hooks siempre deben empezar con la letra use y en minuscula.
export default function useCounter() {

    const [counter, setCounter] = useState(0);

    const increase = () => setCounter(counter + 1)
    const decrement = () => setCounter(counter - 1)
    const reset = () => setCounter(0)

//de esta forma se retorna en los hook si queremos retornar varios elementos
    return {counter, increase, decrement, reset};
}
