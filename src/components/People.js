import React, { useEffect, useState, useContext } from 'react';
import { FavoritesContext } from '../context/FavoritesContext';
import Card from './Card';

const People = () => {
    const [people, setPeople] = useState([]);
    const { addFavorite } = useContext(FavoritesContext);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://www.swapi.tech/api/people');
            const data = await response.json();
            setPeople(data.results);
        };
        fetchData();
    }, []);

    return (
        <div className="container">
            <h2>People</h2>
            <div className="row">
                {people.map(person => (
                    <Card key={person.uid} item={person} addFavorite={addFavorite} />
                ))}
            </div>
        </div>
    );
};

export default People;
