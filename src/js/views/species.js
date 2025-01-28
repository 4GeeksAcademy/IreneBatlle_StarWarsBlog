import React, { useState, useEffect, useRef, useContext } from "react";
import { Link } from 'react-router-dom'
import { Context } from "../store/appContext.js";
import "../../styles/index.css";

const Species = () => {

    const { store, actions } = useContext(Context)
    console.log(store.listContacts)

    // useEffect(() => {

    // }, [])

    return (
        <div>
            Hola
        </div>
    )
};
export default Species;