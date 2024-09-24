import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useFavorites } from '../context/FavoritesContext';

const Details = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const { addFavorite } = useFavorites();

    useEffect(() => {
        const fetchItem = async () => {
            const response = await axios.get(`https://swapi.tech/api/people/${id}`);
            setItem(response.data.result);
        };
        fetchItem();
    }, [id]);

    if (!item) return <div>Loading...</div>;

    return (
        <div className="container">
            <h2>{item.name}</h2>
            <img src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`} alt={item.name} />
            <p>{item.description || 'No description available.'}</p>
            <button onClick={() => addFavorite(item)} className="btn btn-primary">Add to Favorites</button>
        </div>
    );
};

export default Details;
