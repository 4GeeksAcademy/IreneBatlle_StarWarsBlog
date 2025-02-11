import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";

export const FavoritesCard = ({ uid, type, name }) => {
  const { actions, store } = useContext(Context);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorite = store.favorites.find((fav) => fav.uid === uid && fav.type === type);
    setIsFavorite(!!favorite);
  }, [uid, type, store.favorites]);

  const handleFavorite = () => {
    if (isFavorite) {
      actions.removeFromFavorites(uid, type);
    } else {
      actions.addToFavorites({ uid, type, name });
    }
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="card" style={{ width: "20rem" }}>
      <img
        className="card-img-top"
        src={`https://starwars-visualguide.com/assets/img/${type}/${uid}.jpg`}
        alt={`${name}`}
      />
      <div className="card-body">
        <h3 className="card-title">{name}</h3>
        <div className="d-flex justify-content-between">
          <Link to={`/${type}/${uid}`}>
            <button className="btn btn-outline-light">See more</button>
          </Link>
          <button className="btn btn-outline-light" onClick={handleFavorite}>
            <i className={`fa-${isFavorite ? "solid" : "regular"} fa-heart`}></i>
          </button>
        </div>
      </div>
    </div>
  );
};
