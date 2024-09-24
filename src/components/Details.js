import React, { useEffect, useState } from 'react';

const Details = ({ match }) => {
    const [item, setItem] = useState(null);
    const { id } = match.params;

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://www.swapi.tech/api/people/${id}`);
            const data = await response.json();
            setItem(data.result.properties);
        };
        fetchData();
    }, [id]);

    if (!item) return <div>Loading...</div>;

    return (
        <div className="container">
            <h2>{item.name}</h2>
            <p>Height: {item.height}</p>
            <p>Mass: {item.mass}</p>
            <p>Hair Color: {item.hair_color}</p>
            <p>Skin Color: {item.skin_color}</p>
            <p>Eye Color: {item.eye_color}</p>
            <p>Birth Year: {item.birth_year}</p>
            <p>Gender: {item.gender}</p>
        </div>
    );
};

export default Details;
