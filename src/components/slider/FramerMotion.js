import {motion} from "framer-motion";
import Images from "./Images";
import {useRef, useEffect, useState} from 'react';


export default function FramerMotion() {

    const [width, setWidth] = useState(0);
    const carousel = useRef();


    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }, []);


    return (

        <>

            <motion.div ref={carousel} className="carousel" whileTap={{cursor: "grabbing"}}>
                <motion.div drag="x" dragConstraints={{right: 0, left: -width}} className="inner-carousel">
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
