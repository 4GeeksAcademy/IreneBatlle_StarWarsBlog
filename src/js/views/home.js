import React, { useEffect, useState } from "react";
import "../../styles/index.css";
import { Link, matchRoutes } from 'react-router-dom';
import { Characters } from "./characters";
import { Films } from "./films";
import { Planets } from "./planets";
import { Species } from "./species";
import { Starships } from "./starships";
import { Vehicles } from "./vehicles";
import { Sidebar } from "../component/sidebar";


export const Home = () => {


  return (
    <div className="text-center mt-5">
      <div className="photo-grid-home">
	  <div className="image-container">
		<Link to="/characters">
          <img
            src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2022/06/star-wars-episodio-vi-retorno-jedi-darth-vader-luke-skywalker-2737539.jpg?tf=3840x"
            alt="Characters"
          />
		  <div className="text-overlay">Characters</div>
        </Link>
		</div>
         
		<div className="image-container">
		 <Link to="/planets">
          <img
            src="https://static1.srcdn.com/wordpress/wp-content/uploads/2023/10/major-star-wars-planets-future-image.jpg"
            alt="Planets"
          />
		  <div className="text-overlay">Planets</div>
         </Link>
		 </div>
        
		 <div className="image-container">
		<Link to="/species">
          <img src ="https://img.asmedia.epimg.net/resizer/v2/5R5YEWQFQBLWVJWENOTRYZNKDA.jpg?auth=7c986554cbbfa8dc1514c5b76fa896e115250a7ea9249a371003351ec14000f8&width=360&height=203&smart=true"
            alt="Species"
          />
		  <div className="text-overlay">Species</div>
        </Link>
		</div>
        
		<div className="image-container">
		<Link to="/starships">
          <img
            src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/01/star-wars-largest-starships-ranked.jpg"
            alt="Starships"
          />
		  <div className="text-overlay">Starships</div>
        </Link>
		</div>
        
		<div className="image-container">
		<Link to="/vehicles">
          <img
            src="https://www.cnet.com/a/img/resize/8364177c9fdeddb3a35b8434a164b6f29619bd93/hub/2015/02/05/11b50968-7eef-47da-a344-33ebe0d18be0/star-wars-vehicles-at-at.jpg?auto=webp&width=1200"
            alt="Vehicles"
          />
		  <div className="text-overlay">Vehicles</div>
        </Link>
		</div>
        
		<div className="image-container">
		<Link to="/films">
          <img
            src="https://i.blogs.es/2cc78a/ordenstarwars/1366_2000.jpg"
            alt="Films"
          />
		  <div className="text-overlay">Films</div>
        </Link>
		</div>
    <div className="image-container" style={{ justifySelf: "center" }}>
		<Link to="/favorites">
          <img
            src="https://www.slashfilm.com/img/gallery/leia-hugging-rey-jj-abrams-force-awakens/intro-import.jpg"
            alt="Favorites"
          />
		  <div className="text-overlay">Favorites</div>
        </Link>
		</div>
      </div>
    </div>
  );
};
