import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const VehicleInfo = () => {
    const { uid } = useParams();
    const { actions } = useContext(Context); 
    const [vehicle, setVehicle] = useState(null);


    useEffect(() => {
        actions.getVehicles(uid)
            .then(data => {
                setVehicle(data.result);
            })
            .catch(error => {
                console.log("Error fetching the vehicle", error);
            });


    }, [uid,actions]); 



    if (!vehicle) {
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
                src={`https://starwars-visualguide.com/assets/img/vehicles/${uid}.jpg`}
                alt={vehicle.properties.name}
            />
            <div className="card-body">
                <h3 className="card-title">{vehicle.properties.name}</h3>
                <p className="card-text">Class: {vehicle.properties.vehicle_class}</p>
                <p className="card-text">Model: {vehicle.properties.model}</p>
                <p className="card-text">Manufacturer: {vehicle.properties.manufacturer}</p>
                <p className="card-text">Cost: {vehicle.properties.cost_in_credits} credits</p>
                <p className="card-text">Max speed: {vehicle.properties.max_atmosphering_speed}</p>
                <p className="card-text">Length: {vehicle.properties.length}m</p>
                <p className="card-text">Crew: {vehicle.properties.crew}</p>
                <p className="card-text">Passengers: {vehicle.properties.passengers}</p>
                <p className="card-text">Cargo capacity: {vehicle.properties.cargo_capacity}kg</p>
                <p className="card-text">Consumables: {vehicle.properties.consumables}</p>
                <p className="card-text">Films: {vehicle.properties.films?.join(", ") || "N/A"}</p>
                <p className="card-text">Pilots: {vehicle.properties.pilots?.join(", ") || "N/A"}</p>
                <div className="d-flex justify-content-between">
                    <button className="btn btn-outline-light" onClick={handleFavoriteToggle}>
                        <i className={`fa${isFavorite ? "s" : "r"} fa-heart`}></i> 
                    </button>
                </div>
            </div>
        </div>
    );
};
