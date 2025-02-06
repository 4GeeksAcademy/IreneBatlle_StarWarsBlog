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
                setStarship(data.result);
            })
            .catch(error => {
                console.log("Error fetching the starship", error);
            });
    }, [uid, actions]);

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
        <div className="card" style={{ width: "20rem", margin: "auto" }}>
            <img
                className="card-img-top"
                src={`https://starwars-visualguide.com/assets/img/starhips/${uid}.jpg`}
                alt={starships.properties.name}
            />
            <div className="card-body">
                <h3 className="card-title">{starships.properties.name}</h3>
                <p className="card-text">Class: {starships.properties.vehicle_class}</p>
                <p className="card-text">Model: {starships.properties.model}</p>
                <p className="card-text">Manufacturer: {starships.properties.manufacturer}</p>
                <p className="card-text">Cost: {starships.properties.cost_in_credits} credits</p>
                <p className="card-text">Max speed: {starships.properties.max_atmosphering_speed}</p>
                <p className="card-text">Length: {starships.properties.length}m</p>
                <p className="card-text">Crew: {starships.properties.crew}</p>
                <p className="card-text">Passengers: {starships.properties.passengers}</p>
                <p className="card-text">Hyperdrive rating: {starships.properties.hyperdrive_rating}</p>
                <p className="card-text">Cargo capacity: {starships.properties.cargo_capacity}kg</p>
                <p className="card-text">Consumables : {starships.properties.consumables }</p>
                <p className="card-text">Films: {films.properties.films?.join(", ") || "N/A"}</p>
                <p className="card-text">Pilots : {films.properties.pilots?.join(", ") || "N/A"}</p>
                <div className="d-flex justify-content-between">
                    <button className="btn btn-outline-light">See more</button>
                    <button className="btn btn-outline-light">
                        <i className="fa-regular fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};
