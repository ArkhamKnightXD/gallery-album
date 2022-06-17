import React, {useEffect, useState} from "react";
import Movies from './Movie';
import Filter from './Filter';
import {motion, AnimatePresence} from "framer-motion";
import './movie.css';

import '../../spinner.css';
import BeatLoader from "react-spinners/BeatLoader";
import useLoading from "../useLoading";

export default function Main() {

    const apikey = '31ea4d51557c07ce32e050afb1c5494a';

    const [popular, setPopular] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [activeGenre, setActiveGenre] = useState(0);

    useEffect(() => {
            fetchPopular();

        },
        []);

    const fetchPopular = async () => {

        const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apikey}`);
        const movies = await data.json();

        console.log("Data:", movies);

        setPopular(movies.results);
        setFiltered(movies.results);
    }


    /*spinner*/

    const loading = useLoading(1000);

    return (


        <>

            {
                loading ?
                    <BeatLoader className="spin-app" color={'#0B3C8D'} loading={loading} size={20}/>

                    :


            <motion.div layout className="popularMovies">


                <Filter popular={popular}
                        setFiltered={setFiltered}
                        activeGenre={activeGenre}
                        setActiveGenre={setActiveGenre}/>

                <br/>

                <AnimatePresence>

                    {filtered.map((movie) => {
                        return <Movies key={movie.id} movie={movie}/>;
                    })}

                </AnimatePresence>

            </motion.div>
            }

        </>

    );
}



