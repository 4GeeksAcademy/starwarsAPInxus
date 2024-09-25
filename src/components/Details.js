import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
    const { id, type } = useParams(); 
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDetails = async () => {
            const response = await fetch(`https://www.swapi.tech/api/${type}/${id}`);
            const data = await response.json();
            console.log(data);
            setItem(data.result); 
            setLoading(false);
        };

        fetchDetails().catch(console.error);
    }, [id]);

    if (loading) return <div>Loading...</div>;

    return (
        <div className="container">
            <h2>{item.properties.name}</h2>
            <div className="card">
                <img
                    src={`https://starwars-visualguide.com/assets/img/${type == "people" ? "characters" : type}/${id}.jpg`}
                    alt={item.properties.name}
                    className="card-img-top"
                />
                <div className="card-body">
                    {type == "planets" && 
                        <>
                        <p><strong>Diameter:</strong> {item.properties.diameter}</p>
                        <p><strong>Climate:</strong> {item.properties.climate}</p>
                        <p><strong>Terrain:</strong> {item.properties.terrain}</p>
                        </>
                    } 

                    {type == "people" && 
                        <>
                        <p><strong>Name:</strong> {item.properties.name}</p>
                       
                        </>
                    }

                    {type == "vehicles" && 
                        <>
                        <p><strong>Class:</strong> {item.class}</p>
                        <p><strong>Speed:</strong> {item.speed}</p>
                        <p><strong>Passengers:</strong> {item.passengers}</p>
                        </>
                    } 
                    
                   
                </div>
            </div>
        </div>
    );
};

export default Details;
