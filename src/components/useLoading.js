import {useEffect, useState} from "react";


export default function useLoading(animationTime){

    const [loading, setLoading] = useState(false);

    useEffect(() => {

        setLoading(true)

        //la funcion setTimeout establece un tiempo de espera para ejecutar el codigo que este dentro de esta funcion. E
        //el tiempo de espera se lo indicamos en milisegundos, es decir, 2000ms que es igual a 2 seg.

        setTimeout(() => {

            setLoading(false)

        }, animationTime)

    }, [])

    //de esta forma retornamos si solo hay un elemento.
    return loading;

}
