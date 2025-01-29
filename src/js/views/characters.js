import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";
import { PeopleCard } from "../component/peopleCard"; 
import "../../styles/index.css";

export const Characters = () => {
  const { store, actions } = useContext(Context);
  const [charactersList, setCharactersList] = useState([]);
  const [loading, setLoading] = useState(true); 
  

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch("https://swapi.tech/api/people/");
        const data = await response.json();
        setCharactersList(data.results); 
        setLoading(false); 
      } catch (error) {
        console.error("Error loading characters", error);
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []); 

  if (loading) {
    return <div><div class="spinner-border text-light" role="status">
    <span class="visually-hidden">Loading...</span>
  </div></div>; 
  }

  return (
    <div className="card-container">
      {charactersList.map((character) => (
        <PeopleCard key={character.uid} uid={character.uid} />
      ))}
    </div>
  );
};
