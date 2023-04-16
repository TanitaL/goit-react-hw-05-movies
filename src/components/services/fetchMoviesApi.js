const API_KEY = "2ed24422aff354e927ffbe5b6f0c413e";
const URL = 'https://api.themoviedb.org/3/';


export function getMovies() { 
    return fetch(`${URL}trending/movie/day?api_key=${API_KEY}`)
        .then(res => res.json())
}

export function getMoviesById(id) { 
    return fetch(`${URL}movie/${id}?api_key=${API_KEY}`)
        .then(res => res.json())
}

export function getMoviesBySearch(query) { 
    return fetch(`${URL}search/movie?api_key=${API_KEY}&query=${query}&language=en-US`)
        .then(res => res.json())
}

export function getMoviesCast(id) { 
    return fetch(`${URL}movie/${id}/credits?api_key=${API_KEY}`)
        .then(res => res.json())
}

export function getMoviesReview(id) { 
    return fetch(`${URL}movie/${id}/reviews?api_key=${API_KEY}`)
        .then(res => res.json())
}
















// export const getMovies = async () => { 
//     try {
//         const response = await axios.get(`${URL}trending/movie/day?api_key=${API_KEY}`)
//         return response.data.results
//     } catch (error) { } 
// }