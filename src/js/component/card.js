import React from "react";
import { useContext } from 'react';
import { Link, matchRoutes } from 'react-router-dom';
import "../../styles/index.css";
import { Context } from '../store/appContext';

export const Card = ({ contact }) => {
    const { store, actions } = useContext(Context);



    return (
        <div>
            Hola
        </div>
    );
};