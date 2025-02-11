import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext.js"
import { Link } from 'react-router-dom'

export const FilmsCard = ({ uid }) => {
  const { actions, store } = useContext(Context);
  const [films, setFilms] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {

    actions.getFilm(uid).then(data => {
      setFilms(data);
    }).catch(error => {
      console.log("Error fetching the film", error);
    });
  }, [uid]);

  useEffect(() => {
    const favorite = store.favorites.find(fav => fav.uid === uid && fav.type === "films");
    setIsFavorite(favorite ? true : false);
  }, [uid, store.favorites]);

  const handleFavorite = () => {
    if (isFavorite) {
      actions.removeFromFavorites(uid, "films");
    } else {
      const filmData = films.properties;
      actions.addToFavorites({ ...filmData, uid, type: "films" });
    }
    setIsFavorite(!isFavorite);
  };


  if (!films) return <div class="spinner-border text-light" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>;

  return (
    <div className="card" style={{ width: "20rem" }}>
      <img
        className="card-img-top"
        src={`https://starwars-visualguide.com/assets/img/films/${uid}.jpg`}
        alt={films.properties.name}
      />
      <div className="card-body">
        <h3 className="card-title">{films.properties.title}</h3>
        <p className="card-text">Episode {films.properties.episode_id}</p>
        <p className="card-text">Directed by {films.properties.director}</p>
        <p className="card-text">Release date: {films.properties.release_date}</p>
        <div className="d-flex justify-content-between">
          <Link to={`/films/${uid}`}>
            <button className="btn btn-outline-light">See more</button>
          </Link>
          <button className="btn btn-outline-light" onClick={handleFavorite}>
            <i className={`fa-${isFavorite ? 'solid' : 'regular'} fa-heart`} />
          </button>
        </div>
      </div>
    </div>

  )

};
