import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/index.css";
import { VehiclesCard } from "../component/vehiclesCard";

export const Vehicles = () => {
    const { store, actions } = useContext(Context);

//    useEffect(() => {
//        // Llamar la acción para obtener todos los vehículos
//        actions.getAllVehicles();
//    }, [actions]);
//console.log(store.favorites)
    if (!store.vehicles || store.vehicles.length === 0) {
        return (
            <div className="d-flex justify-content-center">
                <div className="spinner-border text-light" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    return (
        <div className="card-container">
            {store.vehicles.map((vehicle) => (
                <VehiclesCard key={vehicle.uid} uid={vehicle.uid} />
            ))}
        </div>
    );
};
