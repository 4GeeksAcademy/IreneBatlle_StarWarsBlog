import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 
import { Context } from "../store/appContext.js";

export const FilmInfo = () => {
    const { uid } = useParams(); 
    const { actions } = useContext(Context); 
    const [film, setFilm] = useState(null); 

    useEffect(() => {
        actions.getFilm(uid) 
            .then(data => {
                setFilm(data.result); 
            })
            .catch(error => {
                console.log("Error fetching the film", error);
            });
    }, [uid, actions]);

    if (!film) {
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
                src={`https://starwars-visualguide.com/assets/img/films/${uid}.jpg`}
                alt={films.properties.name}
            />
            <div className="card-body">
                <h3 className="card-title">{films.properties.name}</h3>
                <p className="card-text">Episode {films.properties.episode_id}</p>
                <p className="card-text">Director: {films.properties.director }</p>
                <p className="card-text">Producer: {films.properties.producer }</p>
                <p className="card-text">Release date: {films.properties.release_date}</p>
                <p className="card-text">Opening crawl: {films.properties.opening_crawl}</p>
                <p className="card-text">Species: {films.properties.species?.join(", ") || "N/A"}</p>
                <p className="card-text">Starships : {films.properties.starships ?.join(", ") || "N/A"}</p>
                <p className="card-text">Vehicles : {films.properties.vehicles ?.join(", ") || "N/A"}</p>
                <p className="card-text">Characters: {films.properties.characters?.join(", ") || "N/A"}</p>
                <p className="card-text">Planets: {films.properties.planets?.join(", ") || "N/A"}</p>
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
