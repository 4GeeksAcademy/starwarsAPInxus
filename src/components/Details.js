import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
    const { id } = useParams(); // Get the ID from the URL
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDetails = async () => {
            const response = await fetch(`https://www.swapi.tech/api/planets/${id}`);
            const data = await response.json();
            setItem(data.result); // Adjust based on response structure
            setLoading(false);
        };

        fetchDetails().catch(console.error);
    }, [id]);

    if (loading) return <div>Loading...</div>;

    return (
        <div className="container">
            <h2>{item.name}</h2>
            <div className="card">
                <img
                    src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                    alt={item.name}
                    className="card-img-top"
                />
                <div className="card-body">
                    <p><strong>Diameter:</strong> {item.diameter}</p>
                    <p><strong>Climate:</strong> {item.climate}</p>
                    <p><strong>Terrain:</strong> {item.terrain}</p>
                    {/* Add more properties as needed */}
                </div>
            </div>
        </div>
    );
};

export default Details;
