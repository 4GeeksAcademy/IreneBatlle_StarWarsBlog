import React, { useContext, useEffect, useState } from "react";
import { Context } from "..store/appContext.js"

export const starshipsCard = ({ uid }) => {
    const { actions } = useContext(Context);
    const [starships, setStarships] = useState(null);

    useEffect(() => {
        const fetchStarships = async () => {
            try {
                const data = await actions.getStarships(uid);
                setStarships(data);
            } catch (error) {
                console.log("Error fetching the starships", error)
            }
        }
        fetchStarships();
    }, [uid])

    if (!starships) return <div class="spinner-border text-light" role="status">
    <span class="visually-hidden"style={{justifySelf:"center"}}>Loading...</span>
  </div>;

    return (
        <div className="card" style={{ width: "20rem" }}>
            <img className="card-img-top"></img>
            <div className="card-body">
                <h3 className="card-title">{starships.properties.name}</h3>
                <p className="card-text">{starships.properties.vehicle_class}</p>
                <p className="card-text">{starships.properties.model}</p>
                <p className="card-text">{starships.properties.manufacturer}</p>
                <p className="card-text">{starships.properties.cost_in_credits}</p>
                <p className="card-text">{starships.properties.max_atmosphering_speed}</p>
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
