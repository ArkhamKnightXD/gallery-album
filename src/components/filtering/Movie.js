import {motion} from "framer-motion";

export default function Movies({ movie }){

    return(

        <motion.div animate={{opacity: 1}} initial={{opacity: 0}}  exit={{opacity: 0}} layout>
          <h2 className="h2-movie">{movie.title}</h2>
            <img className="img-movie" src={'https://image.tmdb.org/t/p/w500'+ movie.backdrop_path} alt="image"/>

        </motion.div>

    );
}
