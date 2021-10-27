import getHash from '../utils/getHash';
import getMovie from '../utils/getMovie';


const Movie = async () =>{
    const id = getHash();
    const movie = await getMovie(id);
    const img_url = 'https://image.tmdb.org/t/p/w500';


    const view = 
        `<div class="Movies-inner">
            <article class="Movies-card">
                <img src="${img_url}${movie.poster_path}" alt="${movie.title}"/>
            </article>
            <article class="Movies-card">
                <h2>${movie.title}</h2>
                <h4>Resumen: <i>${movie.overview} </i></h4>
                <h4>Fecha de estreno: <i> </i>${movie.release_date}</h4>
                <h4>Puntuación: <i>${movie.vote_average}/10</i> </h4>
            </article>
        </div>`
    ;

    return view;
}

export default Movie;