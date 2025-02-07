import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 
import { Context } from "../store/appContext.js";

export const CharacterInfo = () => {
    const { uid } = useParams(); 
    const { actions } = useContext(Context); 
    const [people, setPeople] = useState(null); 

    useEffect(() => {
        actions.getPeople(uid) 
            .then(data => {
                console.log(data)
                setPeople(data); 
            })
            .catch(error => {
                console.log("Error fetching the character", error);
            });
    }, [uid, actions]);
console.log(people)
    if (!people) {
        return (
            <div className="d-flex justify-content-center">
                <div className="spinner-border text-light" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    return (
        <div className="card" style={{ width: "20rem", margin: "auto" }}>
            <img
                className="card-img-top"
                src={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`}
                alt={people.properties.name}
            />
            <div className="card-body">
                <h3 className="card-title">{people.properties.name}</h3>
                <p className="card-text">Birth year: {people.properties.birth_year}</p>
                <p className="card-text">Gender: {people.properties.gender}</p>
                <p className="card-text">Species: {people.properties.species?.join(", ") || "N/A"}</p>
                <p className="card-text">Homeworld : {people.properties.homeworld}</p>
                <p className="card-text">Eye color: {people.properties.eye_color}</p>
                <p className="card-text">Hair color: {people.properties.hair_color}</p>
                <p className="card-text">Height: {people.properties.height}cm</p>
                <p className="card-text">Weight: {people.properties.weight}kg</p>
                <p className="card-text">Skin color: {people.properties.skin_color}</p>
                <p className="card-text">Starships : {people.properties.starships ?.join(", ") || "N/A"}</p>
                <p className="card-text">Vehicles : {people.properties.vehicles ?.join(", ") || "N/A"}</p>
                <p className="card-text">Films: {people.properties.films?.join(", ") || "N/A"}</p>
                <div className="d-flex justify-content-between">
                    <button className="btn btn-outline-light">See more</button>
                    <button className="btn btn-outline-light">
                        <i className="fa-regular fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};
