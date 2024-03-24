import css from "./HomePage.module.css"
import { lazy, useEffect, useState } from 'react'
import { trendingMovie } from "../../components/ApiService/ApiService"
import toast from 'react-hot-toast'

const MovieList = lazy(() => import('../../components/MovieList/MovieList'))
const Loader = lazy(() => import('../../components/Loader/Loader'))
const ErrorMessage = lazy(() => import("../../components/ErrorMessage/ErrorMessage"))

const HomePage = () => {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
      const fetchTrendMovies = async () => {
            setError(null)
            setLoading(true)
            setMovies([])
            try {
                setLoading(true);
                const response = await trendingMovie();
                if (!response) throw new Error(error.message)
                setMovies(response)
            }
            catch (error) {
                setError(error.message)
                toast.error("Something went wrong!")
            }
            finally {
                setLoading(false)
             }
      }
        fetchTrendMovies()
       },[error]
    )
    return (
    <div>
            <h1>List of the most popular films for today</h1>
            {loading && <Loader />}
            {error && <ErrorMessage error={error}/>}
            <MovieList movies={movies}/>
    </div>
)
}

export default HomePage