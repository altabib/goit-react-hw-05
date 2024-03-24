import { lazy, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { queryMovie } from '../../components/ApiService/ApiService'
import { toast } from 'react-hot-toast'

const MovieList = lazy(() => import('../../components/MovieList/MovieList'))
const Loader = lazy(() => import('../../components/Loader/Loader'))
const SearchForm = lazy(() => import("../../components/SearchForm/SearchForm"))
const ErrorMessage = lazy(() => import('../../components/ErrorMessage/ErrorMessage'))



const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const query = searchParams.get("query") ?? ""

  useEffect(() => {
    if(!searchParams) return
    const fetchQueryMovies = async () => {
      setLoading(true)
      setError(null)
      setMovies([])
      try {
        const response = await queryMovie(query)
        setMovies(response)
      } catch (error) {
        setError(error.message)
        toast.error("Something went wrong")
      } finally {
        setLoading(false)
      }
    }

    if(!query) return
    fetchQueryMovies()
  }, [query, error, searchParams])

  const handleSearch = (query) => {
    const nextParams = query !== "" ? {query} : {}
    setSearchParams(nextParams)
  }

  return (
    <main>
      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}
      <SearchForm onSearch={handleSearch} />
      <MovieList movies={movies} />
    </main>
  )
}

export default MoviesPage