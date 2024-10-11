import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ item, addFavorite, removeFavorite, type }) => {
   
    const handleAddFavorite = () => {
        addFavorite({ ...item, type: type });
    };

    
    const handleRemoveFavorite = () => {
        removeFavorite(item.uid);
    };


    const imageUrl = `https://starwars-visualguide.com/assets/img/${type === "people" ? "characters" : type}/${item.uid}.jpg`;

    return (
        <div className="col-md-4 mb-4">
            <div className="card">
                <img 
                    src={imageUrl} 
                    onError={(e) => e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"} 
                    alt={item.name} 
                    className="card-img-top" 
                />
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <div className='d-flex justify-content-between'>
                        <Link to={`/details/${type}/${item.uid}`} className="btn btn-info">
                            View Details
                        </Link>
                        {removeFavorite ? ( 
                            <button className="btn btn-danger ms-auto" onClick={handleRemoveFavorite}>
                                Remove from Favorites
                            </button>
                        ) : (
                            <button className="btn btn-primary ms-auto" onClick={handleAddFavorite}>
                                Add to Favorites
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
