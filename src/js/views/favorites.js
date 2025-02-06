import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import "../../styles/index.css";

export const Favorites = () => {
  const { store, actions } = useContext(Context);

  if (!store.favorites || store.favorites.length === 0) {
    return (
      <div className="text-center mt-5">
        <h2 className="text-light">No favorites yet!</h2>
        <p className="text-light">Add your favorites here!</p>
      </div>
    );
  }

  return (
    <div className="card-container">
Hola
    </div>
  );
};
