import getData from "../utils/getData";

const Home = async() =>{

    const peliculas = await getData();
    console.log(peliculas)

    const img_url = 'https://image.tmdb.org/t/p/w500'

    const view = 
            `${peliculas.results.map(pelicula => `
                <article class="pelicula">
                    <a href="#/${pelicula.id}">
                        <img src="${img_url}${pelicula.poster_path}" alt="${pelicula.title}"/>
                        <h2>${pelicula.original_title}</h2>
                        <p>Fecha de estreno: ${pelicula.release_date}</p>
                    </a>
                </article>`
                ).join('')}
                `;

    return view;
}

export default Home;