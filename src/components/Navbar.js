import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FavoritesContext } from '../context/FavoritesContext';

const Navbar = () => {
    const { favorites } = useContext(FavoritesContext);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">Star Wars API</Link>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/people">People</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/planets">Planets</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/vehicles">Vehicles</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/favorites">Favorites ({favorites.length})</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
