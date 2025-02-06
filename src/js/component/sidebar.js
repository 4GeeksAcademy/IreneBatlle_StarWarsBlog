import React from "react";
import { Link } from "react-router-dom";
import "../../styles/index.css";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="nav">
        <li className="nav-item">
          <Link className="nav-link" to="/characters">Characters</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/planets">Planets</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/species">Species</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/films">Films</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/starships">Starships</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/vehicles">Vehicles</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/favorites">Favorites</Link>
        </li>
      </ul>
    </div>
  );
};
