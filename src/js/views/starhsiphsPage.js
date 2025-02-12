import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const StarshipInfo = () => {
    const { uid } = useParams();
    const { actions } = useContext(Context);
    const [starship, setStarship] = useState(null);

    useEffect(() => {
        actions.getStarship(uid)
            .then(data => {
                setStarship(data);
            })
            .catch(error => {
                console.log("Error fetching the starship", error);
            });
    }, [uid]);

    if (!starship) {
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
                src={`https://starwars-visualguide.com/assets/img/starships/${uid}.jpg`}
                alt={starship.properties.name}
            />
            <div className="card-body">
                <h3 className="card-title">{starship.properties.name}</h3>
                <p className="card-text">Class: {starship.properties.vehicle_class}</p>
                <p className="card-text">Model: {starship.properties.model}</p>
                <p className="card-text">Manufacturer: {starship.properties.manufacturer}</p>
                <p className="card-text">Cost: {starship.properties.cost_in_credits} credits</p>
                <p className="card-text">Max speed: {starship.properties.max_atmosphering_speed}</p>
                <p className="card-text">Length: {starship.properties.length}m</p>
                <p className="card-text">Crew: {starship.properties.crew}</p>
                <p className="card-text">Passengers: {starship.properties.passengers}</p>
                <p className="card-text">Hyperdrive rating: {starship.properties.hyperdrive_rating}</p>
                <p className="card-text">Cargo capacity: {starship.properties.cargo_capacity}kg</p>
                <p className="card-text">Consumables : {starship.properties.consumables}</p>

                </div>
            </div>

    );
};
