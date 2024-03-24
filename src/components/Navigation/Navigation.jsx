import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css"

const Navigation = () => {
    return (
        <header className={css.navHeader}>
            <nav className={css.navigation}>
                <NavLink to="/" className={css.Home}>
                    Home
                </NavLink>

                <NavLink to="/movies" className={css.Movies}>
                    Movies
                </NavLink>
            </nav>
        </header>
    )
}

export default Navigation