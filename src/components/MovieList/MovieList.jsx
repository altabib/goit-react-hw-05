import css from "./MovieList.module.css";
import { Link, useLocation } from "react-router-dom";
import MovieItem from "../../components/MovieItem/MovieItem";

export default function MovieList ({movies}){
    const location = useLocation();
    return (
         <>
               {Array.isArray(movies) && movies.length > 0 && (
                   <ul className={css.moviesBox}>
                    {movies.map((movie) => (
                    <li key={movie.id} className={css.movieItem}>
                <Link
                className={css.movieLink}
                to={`/movies/${movie.id}`}
                state={{ from: location }}
                >
                <MovieItem movie={movie} />
              </Link>
            </li>
          ))}
            </ul>
      )}
        </>
    )
   
}



// Використовуйте його на сторінках HomePage і MoviesPage.