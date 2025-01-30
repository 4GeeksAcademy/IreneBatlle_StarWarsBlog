import React, { useState, useEffect, useRef, useContext } from "react";
import { Link } from 'react-router-dom'
import { Context } from "../store/appContext.js";
import "../../styles/index.css";
import { PlanetsCard } from "../component/planetsCard"; 

export const Planets = () => {

    const { store, actions } = useContext(Context)




  if (!store.planets || store.planets.length === 0) {
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
      {store.planets.map((planet) => (
        <PlanetsCard key={planet.uid} uid={planet.uid} />
      ))}
    </div>
  );
};