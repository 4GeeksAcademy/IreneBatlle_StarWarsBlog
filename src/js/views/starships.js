import React, { useState, useEffect, useRef, useContext } from "react";
import { Link } from 'react-router-dom'
import { Context } from "../store/appContext.js";
import "../../styles/index.css";

export const Starships = () => {

    const { store, actions } = useContext(Context)

    // useEffect(() => {

    // }, [])

    return (
        <div>
            Hola
        </div>
    )
};
