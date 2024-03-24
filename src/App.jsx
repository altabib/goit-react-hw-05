import { lazy, Suspense } from "react";
import { Route, Routes } from 'react-router-dom'
import './App.css'

const SearchForm = lazy(() => import("./components/SearchForm/SearchForm"));
const Loader = lazy(() => import("./components/Loader/Loader"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const ErrorMessage = lazy(() => import("./components/ErrorMessage/ErrorMessage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));
const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage/MovieDetailsPage"));
const MoviePage = lazy(() => import("./pages/MoviesPage/MoviePage"));
const MovieCast = lazy(() => import("./components/MovieCast/MovieCast"));
const MovieReviews = lazy(() => import("./components/MovieReviews/MovieReviews"));
const Navigation = lazy(() => import("./components/Navigation/Navigation"));

function App() {
  
  return (
    <Suspense fallback={<Loader />}>
      <Navigation/>
      <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/movies' element={<MoviePage />} />
          <Route path='/movies/:movieId' element={<MovieDetailsPage />} />
          <Route path='/movies/:movieId/cast' element={<MovieCast />} />
          <Route path='/movies/:movieId/reviews' element={<MovieReviews />} />
          <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  )
}

export default App
