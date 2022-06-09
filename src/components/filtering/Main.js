import {useEffect, useState} from "react";
import Movies from './Movie';
import Filter from './Filter';

export default function Main(){

const fetchPopular = async ()=> {

    const [popular, setPopular] = useState([]);

    useEffect(() => {
       fetchPopular();

    },
        []);
    

    const data = await fetch('api-link');
    const movies = await data.json();

    setPopular(movies.results);
}


    return(


      <>
     <div className={popularMovies}>
     <Filter/>
     {popular.map(movie=> {
        return <Movies key={movie.id} movie={movie}/>;
      })}


</div>
      </>

    );
}



// Awesome Filtering Animation with React Tutorial min: 19min
