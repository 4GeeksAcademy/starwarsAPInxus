import React from 'react';

const Card = ({ item, addFavorite, type }) => {
    // Function to handle adding to favorites
    const handleAddFavorite = () => {
        addFavorite(item);
    };

    // Determine the image source based on the type
    const imageUrl = `https://starwars-visualguide.com/assets/img/${type}/${item.uid}.jpg`;

    return (
        <div className="col-md-4 mb-4">
            <div className="card">
                <img src={imageUrl} alt={item.name} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">
                        {type === 'planet' && <span>Diameter: {item.diameter}</span>}
                        {type === 'vehicle' && <span>Model: {item.model}</span>}
                        {type === 'people' && <span>Height: {item.height}</span>}
                    </p>
                    <button className="btn btn-primary" onClick={handleAddFavorite}>
                        Add to Favorites
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
