import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";
import { PeopleCard } from "../component/peopleCard"; 
import "../../styles/index.css";

export const Characters = () => {
  const { store, actions } = useContext(Context); 

// useEffect(() => {
//
//   actions.getAllPeople();
// }, [actions]);
//

  if (!store.people || store.people.length === 0) {
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
      {store.people.map((character) => (
        <PeopleCard key={character.uid} uid={character.uid} />
      ))}
    </div>
  );
};