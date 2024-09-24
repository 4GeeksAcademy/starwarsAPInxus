import React, { useEffect, useState, useContext } from 'react';
import { FavoritesContext } from '../context/FavoritesContext';
import Card from './Card';

const Vehicles = () => {
    const [Vehicles, setVehicles] = useState([]);
    const { addFavorite } = useContext(FavoritesContext);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://www.swapi.tech/api/vehicles');
            const data = await response.json();
            setVehicles(data.results);
        };
        fetchData();
    }, []);

    return (
        <div className="container">
            <h2>Vehicles</h2>
            <div className="row">
                {vehicles.map(vehicle => (
                    <Card key={vehicle.uid} item={vehicle} addFavorite={addFavorite} />
                ))}
            </div>
        </div>
    );
};

export default Vehicles;
