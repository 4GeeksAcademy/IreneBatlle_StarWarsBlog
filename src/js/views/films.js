import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";
import { FilmsCard } from "../component/filmsCard";
import "../../styles/index.css";

export const Films = () => {
  const { store, actions } = useContext(Context);

// useEffect(() => {
//
//   actions.getAllFilms();
// }, [actions]);


  if (!store.films || store.films.length === 0) {
    return (
      <div>
        <div className="spinner-border text-light" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }


  return (
    <div className="card-container">
      {store.films.map((film) => (
        <FilmsCard key={film.uid} uid={film.uid} />
      ))}
    </div>
  );
};

