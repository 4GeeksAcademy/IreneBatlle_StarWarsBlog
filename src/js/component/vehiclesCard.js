import React, { useContext, useEffect, useState } from "react";
import { Context } from "..store/appContext.js"

export const vehiclesCard = ({ uid }) => {
    const { actions } = useContext(Context);
    const [vehicles, setVehicles] = useState(null);

    useEffect(() => {
        const fetchVehicles = async () => {
            try {
                const data = await actions.getVehicles(uid);
                setVehicles(data);
            } catch (error) {
                console.log("Error fetching the vehicle", error)
            }
        }
        fetchVehicles();
    }, [uid])

    if (!vehicles) return <div class="spinner-border text-light" role="status">
    <span class="visually-hidden" style={{justifySelf:"center"}}>Loading...</span>
  </div>;

    return (
        <div className="card" style={{ width: "20rem" }}>
            <img className="card-img-top"></img>
            <div className="card-body">
                <h3 className="card-title">{vehicles.properties.name}</h3>
                <p className="card-text">{vehicles.properties.vehicle_class}</p>
                <p className="card-text">{vehicles.properties.model}</p>
                <p className="card-text">{vehicles.properties.manufacturer}</p>
                <p className="card-text">{vehicles.properties.cost_in_credits}</p>
                <p className="card-text">{vehicles.properties.max_atmosphering_speed}</p>
                <div>
                    <button className="btn btn-outline-light">See more</button>
                    <button className="btn btn-outline-light">
                        <i class="fa-regular fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>

    )

};
