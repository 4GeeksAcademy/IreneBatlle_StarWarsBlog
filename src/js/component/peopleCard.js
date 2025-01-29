import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext.js";

export const PeopleCard = ({ uid }) => {
  const { actions } = useContext(Context);
  const [people, setPeople] = useState(null);

  // useEffect para obtener la información de un personaje por su uid
  useEffect(() => {
    const fetchPeople = async () => {
      try {
        const data = await actions.getPeople(uid);
        setPeople(data);
      } catch (error) {
        console.log("Error fetching the characters", error);
      }
    };
    fetchPeople();
  }, [uid]);

  if (!people) return <div class="spinner-border text-light" role="status">
  <span class="visually-hidden"style={{justifySelf:"center"}}>Loading...</span>
</div>;

  return (
    <div className="card" style={{ width: "20rem" }}>
      <img
        className="card-img-top"
        src="https://lumiere-a.akamaihd.net/v1/images/twi-lek-main_93917d40.jpeg?region=93%2C0%2C951%2C536"
        alt={people.properties.name} 
      />
      <div className="card-body">
        <h3 className="card-title">{people.properties.name}</h3>
        <p className="card-text">{people.properties.species}</p>
        <p className="card-text">{people.properties.gender}</p>
        <p className="card-text">{people.properties.birth_year}</p>
        <p className="card-text">{people.properties.homeworld}</p>
        <div>
            <div style={{justifyContent:"space-between"}}>
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
