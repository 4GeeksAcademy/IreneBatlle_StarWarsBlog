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
                setFilm(data); 
            })
            .catch(error => {
                console.log("Error fetching the film", error);
            });
    }, [uid]);

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
        <div className="card" style={{ width: "60rem", margin: "auto" }}>
            <img
                className="card-img-top"
                src={`https://starwars-visualguide.com/assets/img/films/${uid}.jpg`}
                alt={film.properties.name}
            />
            <div className="card-body">
                <h3 className="card-title">{film.properties.name}</h3>
                <p className="card-text">Episode {film.properties.episode_id}</p>
                <p className="card-text">Director: {film.properties.director }</p>
                <p className="card-text">Producer: {film.properties.producer }</p>
                <p className="card-text">Release date: {film.properties.release_date}</p>
                <p className="card-text">Opening crawl: {film.properties.opening_crawl}</p>

            </div>
        </div>
    );
};
