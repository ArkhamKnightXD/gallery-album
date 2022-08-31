import {motion} from "framer-motion";
import {Button} from "@material-ui/core";
import {useState} from "react";
import '../../App.css';
import './card.css';
import '../../spinner.css';
import SquareLoader from "react-spinners/SquareLoader";
import useLoading from "../useLoading";

export default function  CardAnimation(){

    const loading = useLoading(1000);
    const [isOpen, setIsOpen] = useState([false]);


    return(
        <>

            {loading ?
                    <SquareLoader className="spin-app" color={'#0B3C8D'} loading={loading} size={60}/>
                    :

                    <motion.div transition={{layout: {duration: 1, type: "spring"}}} layout
                                onClick={() => setIsOpen(!isOpen)}
                                className="card"
                                style={{borderRadius: "1rem", boxShadow: "0px 10px 30px rgba(0,0,0,0.5)"}}>

                        <motion.h2 layout="position" style={{color: '#000'}}>Card Animation 🚀</motion.h2>
                        {isOpen && (
                            <motion.div>
                                <p initial={{opacity: 0}}
                                   animate={{opacity: 1}}
                                   transition={{duration: 1}}
                                   exit={{opacity: 0}} className="expand"><em>Song Lyrics Deja Vu by Olivia Rodrigo</em><br/>
                                    Car rides to Malibu
                                    Strawberry ice cream, one spoon for two<br/>
                                    And tradin' jackets<br/>
                                    Laughin’ 'bout how small it looks on you<br/>
                                    (Ha, ha, ha, ha, ha, ha, ha, ha, ha, ha, ha, ha).</p>
                                <p className="expand2">
                                    Watching reruns of Glee<br/>
                                    Being annoying<br/>
                                    Singing in harmony...</p>
                                <Button className="button01" style={{color: '#000'}}>hide</Button>
                            </motion.div>

                        )}
                    </motion.div>
            }

        </>

    );


}
