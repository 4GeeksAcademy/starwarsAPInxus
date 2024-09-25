import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ item, addFavorite, type }) => {
    // Function to handle adding to favorites
    const handleAddFavorite = () => {
        addFavorite({...item, type:type});
    };

    // Determine the image source based on the type
    const imageUrl = `https://starwars-visualguide.com/assets/img/${type == "people" ? "characters" : type}/${item.uid}.jpg`;
    
    return (
        <div className="col-md-4 mb-4">
            <div className="card">
                <img src={imageUrl} onError={(e) => e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"} alt={item.name} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    {/* <p className="card-text">
                        {type === 'planets' && <span>Diameter: {item?.properties?.diameter}</span>}
                        {type === 'vehicles' && <span>Model: {item?.properties?.model}</span>}
                        {type === 'people' && <span>name: {item?.properties?.height}</span>}
                    </p> */}
                    <div className='d-flex justify-content-between'>
                    <Link to={`/details/${type}/${item.uid}`} className="btn btn-info">
                        View Details
                    </Link>
                    <button className="btn btn-primary ms-auto" onClick={handleAddFavorite}>
                        Add to Favorites
                    </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
