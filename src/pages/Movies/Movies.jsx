import { React, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMoviesBySearch } from 'components/services/fetchMoviesApi';
import MoviesList from 'components/MoviesList/MoviesList';
import Loading from 'components/Loading/Loading';
import css from "./Movies.module.css";


const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const [movies, setMovies] = useState(null);
  const [totalMovies, setTotalMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [inputSearch, setInputSearch] = useState(query);


  useEffect(() => {
    if (query === '') return;

    setMovies(null);
    setTotalMovies(null);
    setIsLoading(true);

    getMoviesBySearch(query)
    .then(data => {
      setMovies(data.results);
      setTotalMovies(data.total_results);
      setIsLoading(false);
    })
    .catch(console.log);
  }, [query]);

  const handleInputChange = evt => {
    setInputSearch(evt.currentTarget.value);
  };

  const handleFormSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const queryNormalized = form.query.value.toLowerCase().trim();

    setSearchParams({ query: queryNormalized });
    form.reset();
  };
  
  return (
    <>
      <form onSubmit={handleFormSubmit} className={css.form}>
        <input
          type="text"
          name="query"
          className={css.input}
          onChange={handleInputChange}
          value={inputSearch}
        />

        <button type="submit" className={css.submit}>
          Search
        </button>
      </form>

      {isLoading && <Loading />}
      {movies && <MoviesList movies={movies} />}
      {totalMovies === 0 && <div className={css.noMovies}>No movies found.</div>}
    </>
  )
}

export default Movies;