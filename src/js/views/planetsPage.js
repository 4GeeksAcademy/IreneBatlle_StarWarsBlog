import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 
import { Context } from "../store/appContext.js";

export const PlanetInfo = () => {
    const { uid } = useParams(); 
    const { actions } = useContext(Context); 
    const [planet, setPlanet] = useState(null); 

    useEffect(() => {
        actions.getPlanet(uid) 
            .then(data => {
                setPlanet(data); 
            })
            .catch(error => {
                console.log("Error fetching the planet", error);
            });
    }, [uid]);

    if (!planet) {
        return (
            <div className="d-flex justify-content-center">
                <div className="spinner-border text-light" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    return (
        <div className="card" style={{ width: "60rem", margin: "auto" }}>
            <img
                className="card-img-top"
                src={`https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`}
                alt={planet.properties.name}
            />
            <div className="card-body">
                <h3 className="card-title">{planet.properties.name}</h3>
                <p className="card-text">Diameter: {planet.properties.diameter}</p>
                <p className="card-text">Rotation period: {planet.properties.rotation_period}</p>
                <p className="card-text">Orbital period: {planet.properties.orbital_period}</p>
                <p className="card-text">Gravity: {planet.properties.gravity}</p>
                <p className="card-text">Population: {planet.properties.population}</p>
                <p className="card-text">Climate: {planet.properties.climate}</p>
                <p className="card-text">Terrain: {planet.properties.terrain}</p>
                <p className="card-text">Surface water: {planet.properties.surface_water}%</p>

            </div>
        </div>
    );
};
