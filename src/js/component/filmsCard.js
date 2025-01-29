import React, { useContext, useEffect, useState } from "react";
import { Context } from "..store/appContext.js"

export const FilmsCard = ({ uid }) => {
    const { actions } = useContext(Context);
    const [films, setFilms] = useState(null);

    useEffect(() => {
        const fetchFilms = async () => {
            try {
                const data = await actions.getFilms(uid);
                setFilms(data);
            } catch (error) {
                console.log("Error fetching the films", error)
            }
        }
        fetchFilms();
    }, [uid])

    if (!films) return <div class="spinner-border text-light" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>;

    return (
        <div className="card" style={{width:"20rem"}}>
            <img className="card-img-top"></img>
        <div className="card-body">
            <h3 className="card-title">{films.properties.title}</h3>
            <p className="card-text">{films.properties.episode_id}</p>
            <p className="card-text">{films.properties.director}</p>
            <p className="card-text">{films.properties.release_date}</p>
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
