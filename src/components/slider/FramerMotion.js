import {motion} from "framer-motion";
import Images from "./Images";
import {useRef, useEffect, useState} from 'react';


export default function FramerMotion() {

    const [width, setWidth] = useState(0);
    //Mediante useRef obtenemos la referencia de la pagina en que estamos
    const carousel = useRef();


    useEffect(() => {

        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }, []);


    return (

        <>

            {/*En el motion initial se le indica la referencia de la pagina y la forma que tendra el cursor*/}
            <motion.div ref={carousel} className="carousel" whileTap={{cursor: "grabbing"}}>

                {/*Aqui en drag se indica la direccion en que se moveran las imagenes, si es x sera de izquierda a derecha.
                y si es y sera de arriba a abajo. En dragconstraints se indica el rango de movimiento del slider.*/}
                <motion.div drag="x" dragConstraints={{right: 0, left: -width}} className="inner-carousel">

                    {/*Aqui se muestra el nuevo arreglo, lo que este dentro ese map se va a repetir por la cantidad de
                    elementos que contenga el arreglo.*/}
                    {Images.map((image) => {
                        return (
                            <motion.div className="item" key={image}>
                                <img src={image} alt=""/>
                            </motion.div>
                        );
                    })}

                </motion.div>
            </motion.div>


        </>
    );
}
