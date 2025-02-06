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
    }, [uid, actions]);

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
                alt={vehicles.properties.name}
            />
            <div className="card-body">
                <h3 className="card-title">{vehicles.properties.name}</h3>
                <p className="card-text">Class: {vehicles.properties.vehicle_class}</p>
                <p className="card-text">Model: {vehicles.properties.model}</p>
                <p className="card-text">Manufacturer: {vehicles.properties.manufacturer}</p>
                <p className="card-text">Cost: {vehicles.properties.cost_in_credits} credits</p>
                <p className="card-text">Max speed: {vehicles.properties.max_atmosphering_speed}</p>
                <p className="card-text">Length: {vehicles.properties.length}m</p>
                <p className="card-text">Crew: {vehicles.properties.crew}</p>
                <p className="card-text">Passengers: {vehicles.properties.passengers}</p>
                <p className="card-text">Cargo capacity: {vehicles.properties.cargo_capacity}kg</p>
                <p className="card-text">Consumables : {vehicles.properties.consumables }</p>
                <p className="card-text">Films: {vehicles.properties.films?.join(", ") || "N/A"}</p>
                <p className="card-text">Pilots : {vehicles.properties.pilots?.join(", ") || "N/A"}</p>
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
