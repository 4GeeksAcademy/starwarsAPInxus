import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ item, addFavorite }) => {
    const { name, uid } = item;
    const imageUrl = `https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`;

    return (
        <div className="col-md-4 mb-4">
            <div className="card">
                <img src={imageUrl} className="card-img-top" alt={name} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <Link to={`/details/${uid}`} className="btn btn-primary">Details</Link>
                    <button className="btn btn-secondary" onClick={() => addFavorite(item)}>Add to Favorites</button>
                </div>
            </div>
        </div>
    );
};

export default Card;
