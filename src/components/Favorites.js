import React, { useContext } from 'react';
import { FavoritesContext } from '../context/FavoritesContext';
import Card from './Card';

const Favorites = () => {
    const { favorites, removeFavorite } = useContext(FavoritesContext);

    return (
        <div className="container">
            <h2>Your Favorites</h2>
            <div className="row">
                {favorites.length > 0 ? (
                    favorites.map(item => (
                        <Card 
                            key={item.uid} 
                            item={item} 
                            removeFavorite={removeFavorite} 
                            type={item.type} 
                        />
                    ))
                ) : (
                    <p>No favorites added yet!</p>
                )}
            </div>
        </div>
    );
};

export default Favorites;
