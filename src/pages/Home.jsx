import { React, useEffect, useState } from "react";
import { getMovies } from "components/services/fetchMoviesApi.js";
import MoviesList from "components/MoviesList/MoviesList";

const Home = () => {
    const [trendingMovies, setTrendingMovies] = useState(null);

    useEffect(() => { 
        getMovies().then((data) => { 
            setTrendingMovies(data.results);
        }).catch(console.log);
    }, [])
    
    return (<MoviesList trendingMovies={trendingMovies}/>);
}

export default Home;

