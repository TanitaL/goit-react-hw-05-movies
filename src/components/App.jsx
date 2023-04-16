import { Route, Routes } from "react-router-dom";
import { lazy } from 'react';
import Cast from "./Cast/Cast";
import Reviews from "./Reviews/Reviews";
import SharedLayout from "./SharedLayout/SharedLayout";

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const PageNotFound = lazy(() => import('../pages/PageNotFound/PageNotFound'));


export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout/>}>
          <Route index element={<Home/>}/>
          <Route path="/movies" element={<Movies/>} />
          
          <Route path="/movies/:movieId" element={<MovieDetails/>}>
            <Route path="cast" element={<Cast/>} />
            <Route path="reviews" element={<Reviews/>} />
          </Route>

          <Route path="*" element={<PageNotFound/>} />
        </Route>
      </Routes>
    </div>
  );
};
