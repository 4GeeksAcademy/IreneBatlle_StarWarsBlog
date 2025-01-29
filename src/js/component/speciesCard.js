import React, { useContext, useEffect, useState } from "react";
import { Context } from "..store/appContext.js"

export const speciesCard = ({ uid }) => {
    const { actions } = useContext(Context);
    const [species, setSpecies] = useState(null);

    useEffect(() => {
        const fetchSpecies = async () => {
            try {
                const data = await actions.getSpecies(uid);
                setSpecies(data);
            } catch (error) {
                console.log("Error fetching the species", error)
            }
        }
        fetchSpecies();
    }, [uid])

    if (!species) return <div class="spinner-border text-light" role="status">
    <span class="visually-hidden"style={{justifySelf:"center"}}>Loading...</span>
  </div>;

    return (
        <div className="card" style={{ width: "20rem" }}>
            <img className="card-img-top"></img>
            <div className="card-body">
                <h3 className="card-title">{species.properties.name}</h3>
                <p className="card-text">{species.properties.homeworld}</p>
                <p className="card-text">{species.properties.classification}</p>
                <p className="card-text">{species.properties.designation}</p>
                <p className="card-text">{species.properties.average_height}</p>
                <p className="card-text">{species.properties.average_lifespan}</p>
                <div>
                    <button className="btn btn-outline-light">See more</button>
                    <button className="btn btn-outline-light">
                        <i class="fa-regular fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>

    )

};
