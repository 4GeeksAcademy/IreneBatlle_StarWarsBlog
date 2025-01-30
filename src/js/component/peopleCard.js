import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";

export const PeopleCard = ({ uid }) => {
  const { actions, store } = useContext(Context);
  const [people, setPeople] = useState(null);
  const [homeworld, setHomeworld] = useState("Loading...")

  const findHomeworld = () => {
    const urldividida = people.properties.homeworld.split("/");
    const id = urldividida[urldividida.length - 1];
    const planeta = store.planets.find((planet) => planet.uid == id);
    if (planeta){
      setHomeworld(planeta.name);
    } else {
      setHomeworld("Unknown")
    }
  }
  
  useEffect(() => {
  
    actions.getPeople(uid).then(data => {
      setPeople(data);
    }).catch(error => {
      console.log("Error fetching the character", error);
    });
  }, [uid]);

  useEffect(() => {
    if (people&&store.planets.length>0){
      findHomeworld();
    }
  }, [people]);
  
  if (!people) return <div className="spinner-border text-light" role="status"  style={{ justifySelf: "center" }}>
    <span class="visually-hidden">Loading...</span>
  </div>;


  return (
    <div className="card" style={{ width: "20rem" }}>
      <img
        className="card-img-top"
        src={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`}
        alt={people.properties.name}
      />
      <div className="card-body">
        <h3 className="card-title">{people.properties.name}</h3>
        <p className="card-text">Species: {people.properties.species}</p>
        <p className="card-text">Gender: {people.properties.gender}</p>
        <p className="card-text">Birth year: {people.properties.birth_year}</p>
        <p className="card-text">Origin: {homeworld}</p>
        <div>
          <div style={{ justifyContent: "space-between" }}>
            <button className="btn btn-outline-light">See more</button>
            <button className="btn btn-outline-light">
              <i className="fa-regular fa-heart"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
