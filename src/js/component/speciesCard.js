import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext.js"
import { Link } from 'react-router-dom'

export const SpeciesCard = ({ uid }) => {
  const { actions, store } = useContext(Context);
  const [species, setSpecies] = useState(null);
  const [homeworld, setHomeworld] = useState("Loading...")

  const findHomeworld = () => {
    const urldividida = species.properties.homeworld.split("/");
    const id = urldividida[urldividida.length - 1];
    const planeta = store.planets.find((planet) => planet.uid == id);
    if (planeta) {
      setHomeworld(planeta.name);
    } else {
      setHomeworld("Unknown")
    }
  }


  useEffect(() => {

    actions.getSpecies(uid).then(data => {
      setSpecies(data);
    }).catch(error => {
      console.log("Error fetching the species", error);
    });
  }, [uid]);

  useEffect(() => {
    if (species && store.planets.length > 0) {
      findHomeworld();
    }
  }, [species]);

  if (!species) return <div class="spinner-border text-light" role="status">
    <span class="visually-hidden" style={{ justifySelf: "center" }}>Loading...</span>
  </div>;

  return (
    <div className="card" style={{ width: "20rem" }}>
      <img
        className="card-img-top"
        src={`https://starwars-visualguide.com/assets/img/species/${uid}.jpg`}
        alt={species.properties.name}
      />
      <div className="card-body">
        <h3 className="card-title">{species.properties.name}</h3>
        <p className="card-text">Homeworld: {homeworld}</p>
        <p className="card-text">Classification: {species.properties.classification}</p>
        <p className="card-text">Designation: {species.properties.designation}</p>
        <p className="card-text">Average height: {species.properties.average_height} cm</p>
        <p className="card-text">Average lifespan: {species.properties.average_lifespan} years</p>
        <div className="d-flex justify-content-between">
          <Link to={`/species/${uid}`}>
            <button className="btn btn-outline-light">See more</button>
          </Link>
          <button className="btn btn-outline-light">
            <i className="fa-regular fa-heart"></i>
          </button>
        </div>
      </div>
    </div>

  )

};
