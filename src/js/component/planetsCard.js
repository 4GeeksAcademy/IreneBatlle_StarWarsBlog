import React, { useContext, useEffect, useState } from "react";
import { Context } from "..store/appContext.js"

export const PlanetsCard = ({ uid }) => {
    const { actions } = useContext(Context);
    const [planets, setPlanets] = useState(null);

    useEffect(() => {
        const fetchPlanets = async () => {
            try {
                const data = await actions.getPlanets(uid);
                setPlanets(data);
            } catch (error) {
                console.log("Error fetching the planets", error)
            }
        }
        fetchPlanets();
    }, [uid])

    if (!planets) return <div class="spinner-border text-light" role="status">
    <span class="visually-hidden"style={{justifySelf:"center"}}>Loading...</span>
  </div>;

    return (
        <div className="card" style={{ width: "20rem" }}>
        <img className="card-img-top"></img>
        <div className="card-body">
            <h3 className="card-title">{planets.properties.name}</h3>
            <p className="card-text">{planets.properties.population}</p>
            <p className="card-text">{planets.properties.diameter}</p>
            <p className="card-text">{planets.properties.climate}</p>
            <p className="card-text">{planets.properties.terrain }</p>
            <div>
                <button className="btn btn-outline-light">See more</button>
                <button className="btn btn-outline-light">
                    <i class="fa-regular fa-heart"></i>
                </button>
            </div>
            </div></div>

    )

};
