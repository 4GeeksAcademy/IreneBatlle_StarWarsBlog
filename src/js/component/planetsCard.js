import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext.js"
import { Link } from 'react-router-dom'

export const PlanetsCard = ({ uid }) => {
    const { actions } = useContext(Context);
    const [planets, setPlanets] = useState(null);
  useEffect(() => {
  
    actions.getPlanet(uid).then(data => {
      setPlanets(data);
    }).catch(error => {
      console.log("Error fetching the planet", error);
    });
  }, [uid]);


    if (!planets) return <div class="spinner-border text-light" role="status">
    <span class="visually-hidden"style={{justifySelf:"center"}}>Loading...</span>
  </div>;

    return (
        <div className="card" style={{ width: "20rem" }}>
      <img
        className="card-img-top"
        src={`https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`}
        alt={planets.properties.name}
      />
        <div className="card-body">
            <h3 className="card-title">{planets.properties.name}</h3>
            <p className="card-text">Population: {planets.properties.population}</p>
            <p className="card-text">Diameter: {planets.properties.diameter}</p>
            <p className="card-text">Climate: {planets.properties.climate}</p>
            <p className="card-text">Terrain: {planets.properties.terrain }</p>
            <div>
            <Link to={`/planets/${uid}`}>
                <button className="btn btn-outline-light">See more</button>
                </Link>
                <button className="btn btn-outline-light">
                    <i className="fa-regular fa-heart"></i>
                </button>
            </div>
            </div></div>

    )

};
