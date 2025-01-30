import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { SpeciesCard } from "../component/speciesCard";
import "../../styles/index.css";
import getState from "../store/flux.js";

export const Species = () => {

    const { store, actions } = useContext(Context);


   // useEffect(() => {
   //     actions.getAllSpecies();
   //   }, []);

      if (!store.species || store.species.length === 0) {
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
          {store.species.map((species) => (
            <SpeciesCard key={species.uid} uid={species.uid} />
          ))}
        </div>
      );
    };