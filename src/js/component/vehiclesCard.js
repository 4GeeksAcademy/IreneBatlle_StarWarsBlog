import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext.js"

export const VehiclesCard = ({ uid }) => {
    const { actions } = useContext(Context);
    const [vehicles, setVehicles] = useState(null);

  useEffect(() => {
  
    actions.getVehicles(uid).then(data => {
      setVehicles(data);
    }).catch(error => {
      console.log("Error fetching the vehicle", error);
    });
  }, [uid]);


    if (!vehicles) return <div class="spinner-border text-light" role="status">
    <span class="visually-hidden" style={{justifySelf:"center"}}>Loading...</span>
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
                <div>
                    <button className="btn btn-outline-light">See more</button>
                    <button className="btn btn-outline-light">
                        <i className="fa-regular fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>

    )

};
