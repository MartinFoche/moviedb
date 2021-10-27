const API_KEY = "8e2102c2def4364179f559472c1b1580";
const BASE_URL = "https://api.themoviedb.org/3/movie/popular"; 

const getData = async () =>{
    const apiURL = `${BASE_URL}?api_key=${API_KEY}&sort_by=vote_count.desc`;

    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("Error: ",error);
    }
};

export default getData;