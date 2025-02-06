import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext.js";
import { Link } from 'react-router-dom';

export const VehiclesCard = ({ uid }) => {
    const { actions, store } = useContext(Context);  
    const [vehicles, setVehicles] = useState(null);
    const [isFavorite, setIsFavorite] = useState(false); 

    useEffect(() => {

        actions.getVehicles(uid).then(data => {
            setVehicles(data);
        }).catch(error => {
            console.log("Error fetching the vehicle", error);
        });
    }, [uid, actions]); 


    useEffect(() => {
        const favorite = store.favorites.find(fav => fav.uid === uid && fav.type === "vehicles");
        setIsFavorite(favorite ? true : false);  
    }, [uid, store.favorites]); 

    const handleFavorite = () => {
        if (isFavorite) {
            actions.removeFromFavorites(uid, "vehicles");  
        } else {
            const vehicleData = vehicles.properties;
            actions.addToFavorites({ ...vehicleData, uid, type: "vehicles" });  
        }
        setIsFavorite(!isFavorite); 
    };

    if (!vehicles) return <div className="spinner-border text-light" role="status">
        <span className="visually-hidden">Loading...</span>
    </div>;

    return (
        <div className="card" style={{ width: "20rem" }}>
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
                <p className="card-text">Max. speed: {vehicles.properties.max_atmosphering_speed} km/h</p>
                <div className="d-flex justify-content-between">
                    <Link to={`/vehicles/${uid}`}>
                        <button className="btn btn-outline-light">See more</button>
                    </Link>
                    <button className="btn btn-outline-light" onClick={handleFavorite}>
                        <i className={`fa-${isFavorite ? 'solid' : 'regular'} fa-heart`}></i> {/* Cambiar el ícono según el estado */}
                    </button>
                </div>
            </div>
        </div>
    );
};
