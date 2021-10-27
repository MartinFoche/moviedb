import Error404 from '../pages/Error404';

const API_KEY = "8e2102c2def4364179f559472c1b1580";
const BASE_URL = "https://api.themoviedb.org/3/movie/";

const getMovie = async (id) =>{
    const apiURL = id 
            ? `${BASE_URL}${id}?api_key=${API_KEY}&language=es`
            : Error404;
    try{
        const response = await fetch(apiURL);
        const data = await response.json();
        return data
    } catch(err){
        console.log('error de getdatamovie: ',err);
    }
}

export default getMovie;