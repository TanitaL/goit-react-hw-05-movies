import { React, Suspense, useEffect, useState } from "react";
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { getMoviesById } from "components/services/fetchMoviesApi";
import GoBackBtn from "components/GoBackBtn/GoBackBtn";
import MovieInfo from "components/MovieInfo/MovieInfo";
import AdditionalInfo from "components/AdditionalInfo/AdditionalInfo";
import Loading from "components/Loading/Loading";


const MovieDetails = () => {
    const [movie, setMovie] = useState(null);
    const { movieId } = useParams();

    const location = useLocation();
    const backLinkHref = location.state?.from ?? '/';

    useEffect(() => { 
        getMoviesById(movieId).then((data) => { 
            setMovie(data);
        }).catch(console.log);
    }, [movieId])

    return (
        <div>
            <GoBackBtn backLinkHref={backLinkHref} />
            {movie && <MovieInfo movie={movie} />}
            <AdditionalInfo location={backLinkHref} />
            
            <Suspense fallback={<Loading/>}>
                <Outlet />
            </Suspense>
        </div>
    )
}

export default MovieDetails;
