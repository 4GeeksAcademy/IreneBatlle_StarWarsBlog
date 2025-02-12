import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const SpeciesInfo = () => {
    const { uid } = useParams();
    const { actions } = useContext(Context);
    const [species, setSpecies] = useState(null);

    useEffect(() => {
        actions.getSpecies(uid)
            .then(data => {
                setSpecies(data);
            })
            .catch(error => {
                console.log("Error fetching the species", error);
            });
    }, [uid]);

    if (!species) {
        return (
            <div className="d-flex justify-content-center">
                <div className="spinner-border text-light" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    return (
        <div className="card" style={{ width: "60rem", margin: "auto" }}>
            <img
                className="card-img-top"
                src={`https://starwars-visualguide.com/assets/img/species/${uid}.jpg`}
                alt={species.properties.name}
            />
            <div className="card-body">
                <h3 className="card-title">{species.properties.name}</h3>
                <p className="card-text">Classification: {species.properties.classification }</p>
                <p className="card-text">Designation: {species.properties.designation }</p>
                <p className="card-text">Average height: {species.properties.average_height}cm</p>
                <p className="card-text">Average lifespan: {species.properties.average_lifespan} years</p>
                <p className="card-text">Eye colors: {species.properties.eye_colors}</p>
                <p className="card-text">Hair colors: {species.properties.hair_colors}m</p>
                <p className="card-text">Skin colors: {species.properties.skin_colors}</p>
                <p className="card-text">Language: {species.properties.language }</p>
                <p className="card-text">Homeworld: {species.properties.homeworld }</p>
                <p className="card-text">Consumables: {species.properties.consumables }</p>

            </div>
        </div>
    );
};
