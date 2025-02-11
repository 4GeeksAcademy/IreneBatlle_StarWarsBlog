import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext.js"
import { Link } from 'react-router-dom'

export const StarshipsCard = ({ uid }) => {
  const { actions, store } = useContext(Context);
  const [starships, setStarships] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    actions.getStarship(uid).then(data => {
      setStarships(data);
    }).catch(error => {
      console.log("Error fetching the starhip", error);
    });
  }, [uid, actions]);

  useEffect(() => {
    const favorite = store.favorites.find(fav => fav.uid === uid && fav.type === "starships");
    setIsFavorite(favorite ? true : false);
  }, [uid, store.favorites]);

  const handleFavorite = () => {
    if (isFavorite) {
      actions.removeFromFavorites(uid, "starships");
    } else {
      const starshipData = starships.properties;
      actions.addToFavorites({ ...starshipData, uid, type: "starships" });
    }
    setIsFavorite(!isFavorite);
  };

  if (!starships) return <div class="spinner-border text-light" role="status">
    <span class="visually-hidden" style={{ justifySelf: "center" }}>Loading...</span>
  </div>;


  return (
    <div className="card" style={{ width: "20rem" }}>
      <img
        className="card-img-top"
        src={`https://starwars-visualguide.com/assets/img/starships/${uid}.jpg`}
        alt={starships.properties.name}
      />
      <div className="card-body">
        <h3 className="card-title">{starships.properties.name}</h3>
        <p className="card-text">Model: {starships.properties.model}</p>
        <p className="card-text">Manufacturer: {starships.properties.manufacturer}</p>
        <p className="card-text">Cost: {starships.properties.cost_in_credits} credits</p>
        <p className="card-text">Max speed: {starships.properties.max_atmosphering_speed}</p>
        <div className="d-flex justify-content-between">
          <Link to={`/starhips/${uid}`}>
            <button className="btn btn-outline-light">See more</button>
          </Link>
          <button className="btn btn-outline-light" onClick={handleFavorite}>
            <i className={`fa-${isFavorite ? 'solid' : 'regular'} fa-heart`}></i>
          </button>
        </div>
      </div>
    </div>

  )

};
