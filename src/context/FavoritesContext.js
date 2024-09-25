import React, { createContext, useState } from 'react';

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    const addFavorite = (item) => {
        const isFavorite=favorites.some(element => element.name == item.name)
        if (!isFavorite) {
            setFavorites((prevFavorites) => [...prevFavorites, item]);
        }
       
    };

    const removeFavorite = (item) => {
        setFavorites((prevFavorites) => prevFavorites.filter(fav => fav.id !== item.id));
    };

    return (
        <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
};
