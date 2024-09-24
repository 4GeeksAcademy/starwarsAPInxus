import React, { useEffect, useState, useContext } from 'react';
import { FavoritesContext } from '../context/FavoritesContext';
import Card from './Card';

const Planets = () => {
    const [planets, setPlanets] = useState([]);
    const { addFavorite } = useContext(FavoritesContext);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://www.swapi.tech/api/planets');
            const data = await response.json();
            setPlanets(data.results);
        };
        fetchData();
    }, []);

    return (
        <div className="container">
            <h2>Planets</h2>
            <div className="row">
                {planets.map(planet => (
                    <Card key={planet.uid} item={planet} addFavorite={addFavorite} type="planet" />
                ))}
            </div>
        </div>
    );
};

export default Planets;
