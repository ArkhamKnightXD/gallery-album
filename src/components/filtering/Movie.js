

export default function Movies({movie}){

    return(

        <div>
          <h2>{movie.title}</h2>
            <img src={'https://image.tmdb.org/t/p/w500'+ movie.backdrop_PATH} alt="image"/>

        </div>

    );
}
