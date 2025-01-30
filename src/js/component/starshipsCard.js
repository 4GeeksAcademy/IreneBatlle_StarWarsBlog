import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext.js"

export const StarshipsCard = ({ uid }) => {
    const { actions } = useContext(Context);
    const [starships, setStarships] = useState(null);

    useEffect(() => {
        actions.getStarship(uid).then(data => {
            setStarships(data);  
          }).catch(error => {
            console.log("Error fetching the starhip", error);
          });
        }, [uid, actions]);
      
        if (!starships) return <div class="spinner-border text-light" role="status">
        <span class="visually-hidden"style={{justifySelf:"center"}}>Loading...</span>
      </div>;


    return (
        <div className="card" style={{ width: "20rem" }}>
                             <img
        className="card-img-top"
        src={`https://starwars-visualguide.com/assets/img/starships/${uid}.jpg`}
        alt={starships.properties.name}
      />
            <div className="card-body">
                <h3 className="card-title">{starships.properties.name}</h3>
                <p className="card-text">Class: {starships.properties.vehicle_class}</p>
                <p className="card-text">Model: {starships.properties.model}</p>
                <p className="card-text">Manufacturer: {starships.properties.manufacturer}</p>
                <p className="card-text">Cost: {starships.properties.cost_in_credits}</p>
                <p className="card-text">Max speed: {starships.properties.max_atmosphering_speed}</p>
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
