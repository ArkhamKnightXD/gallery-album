import {motion} from "framer-motion";
import {Button} from "@material-ui/core";
import {useState} from "react";
import '../../App.css';
import '../../index.css';

export default function  CardAnimation(){

    const [isOpen, setIsOpen] = useState([false]);

    return(
        <>

            <motion.div transition={{layout: {duration: 1, type: "spring"}}} layout onClick={() => setIsOpen(!isOpen)}
                        className="card" style={{borderRadius: "1rem", boxShadow: "0px 10px 30px rgba(0,0,0,0.5)"}}>

                <motion.h2 layout="position">Framer Motion 🚀</motion.h2>
                {isOpen && (
                    <motion.div>
                        <p initial={{opacity: 0}}
                           animate={{opacity: 1}}
                           transition={{duration: 1}}
                           exit={{opacity: 0}} className="expand">Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Donec dictum justo sed tempus aliquet.
                            Praesent luctus eleifend finibus. Pellentesque tincidunt.</p>
                        <p>turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet</p>
                        <Button className="button01">hide</Button>
                    </motion.div>

                )}
            </motion.div>

        </>

    );


}
