import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";
import { StarshipsCard } from "../component/starshipsCard"; 
import getState from "../store/flux.js";

export const Starships = () => {
  const { store, actions } = useContext(Context);

 // useEffect(() => {
 //   actions.getAllStarships();
 // }, [actions]);

  if (!store.starships || store.starships.length === 0) {
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
      {store.starships.map((starship) => (
        <StarshipsCard key={starship.uid} uid={starship.uid} />
      ))}
    </div>
  );
};
