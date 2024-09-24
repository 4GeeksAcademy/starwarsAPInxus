import React from 'react';
import { useFavorites } from '../context/FavoritesContext';
import { Link } from 'react-router-dom';

const Favorites = () => {
    const { favorites, removeFavorite } = useFavorites();

    return (
        <div className="container">
            <h2>Favorites</h2>
            <div className="row">
                {favorites.map(item => (
                    <div className="col-md-4" key={item.uid}>
                        <div className="card mb-3">
                            <img src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`} className="card-img-top" alt={item.name} />
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <Link to={`/details/${item.uid}`} className="btn btn-primary">Details</Link>
                                <button className="btn btn-danger" onClick={() => removeFavorite(item)}>Remove</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Favorites;
