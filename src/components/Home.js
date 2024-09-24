import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useFavorites } from '../context/FavoritesContext';
import { Link } from 'react-router-dom';

const Home = () => {
    const [people, setPeople] = useState([]);
    const [vehicles, setVehicles] = useState([]);
    const [planets, setPlanets] = useState([]);
    const { addFavorite } = useFavorites();

    useEffect(() => {
        const fetchData = async () => {
            const peopleResponse = await axios.get('https://swapi.tech/api/people');
            const vehiclesResponse = await axios.get('https://swapi.tech/api/vehicles');
            const planetsResponse = await axios.get('https://swapi.tech/api/planets');
            setPeople(peopleResponse.data.results);
            setVehicles(vehiclesResponse.data.results);
            setPlanets(planetsResponse.data.results);
        };
        fetchData();
    }, []);

    return (
        <div className="container">
            <h2>People</h2>
            <div className="row">
                {people.map(person => (
                    <div className="col-md-4" key={person.uid}>
                        <div className="card mb-3">
                            <img src={`https://starwars-visualguide.com/assets/img/characters/${person.uid}.jpg`} className="card-img-top" alt={person.name} />
                            <div className="card-body">
                                <h5 className="card-title">{person.name}</h5>
                                <p className="card-text">{person.description || 'No description available.'}</p>
                                <Link to={`/details/${person.uid}`} className="btn btn-primary">Details</Link>
                                <button className="btn btn-secondary" onClick={() => addFavorite(person)}>Favorite</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* Similar sections for vehicles and planets can be added here */}
        </div>
    );
};

export default Home;
