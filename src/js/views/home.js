import React, { useEffect, useState } from "react";
import "../../styles/index.css";
import { Link, matchRoutes } from 'react-router-dom';
import { Characters } from "./characters";
import { Films } from "./films";
import { Planets } from "./planets";
import { Species } from "./species";
import { Starships } from "./starships";
import { Vehicles } from "./vehicles";


export const Home = () => {
  // Categorías de imágenes
  
  const getRandomImageCharacters = [
    "https://imagenes.20minutos.es/files/image_990_556/uploads/imagenes/2019/04/18/156382.jpg",
    "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2019/08/han-solo-star-wars.jpg",
  "https://www.lavanguardia.com/files/image_449_220/uploads/2017/12/08/5fa3d8e24f841.jpeg",
  "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B0BDA09845AA575291C38D21E462571A6E07AC34899505FA6F6D615137B15EDF/scale?width=1200&aspectRatio=1.78&format=webp",
  "https://preview.redd.it/ds4l7k9lt81b1.jpg?width=640&crop=smart&auto=webp&s=1b133d9f2876d616187efc408ea1670faeb37eb0",
  "https://sm.ign.com/t/ign_latam/screenshot/default/aakin_h9w7.1280.jpg",
  "https://lumiere-a.akamaihd.net/v1/images/din-djarin-the-mandalorian-main_38344f24.jpeg?region=106%2C64%2C1622%2C1215",
  "https://img.asmedia.epimg.net/resizer/v2/UF2B2MQXURBHNPHQMHQYUZS56U.jpg?auth=a30e3d472a6cec07b696637606ddbd49d8a81d9005808074fe046c985332f047&width=1472&height=828&smart=true",
  "https://lumiere-a.akamaihd.net/v1/images/Yoda-Retina_2a7ecc26.jpeg?region=0%2C0%2C1536%2C768",
  "https://media.disneylandparis.com/d4th/es-es/images/n037183_2025feb27_world_the-mandalorian-grogu-characters-discoveryland_16-9_tcm797-256233.jpg",
  "https://lumiere-a.akamaihd.net/v1/images/ahsoka-official-trailer-stills-08_2d5bc948.jpeg?region=0,0,1920,802",
  "https://www.indiewire.com/wp-content/uploads/2019/12/ep3_ia_92696_r.jpg?w=600&h=337&crop=1",
  "https://lumiere-a.akamaihd.net/v1/images/palpatine-return-of-the-jedi-tal_d881391a.jpeg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbOmrbSIoY8-j9MkbHT3rX-CPB2J6tXBYQVQ&s",
  "https://lumiere-a.akamaihd.net/v1/images/chewie-main_e1968a8a.jpeg?region=0%2C0%2C716%2C536",
  "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/02/Poe-Dameron-Star-Wars-The-Rise-of-Skywalker.jpg",
  "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2020/06/john-boyega-star-wars-finn-1958247.jpg",
  ];

  const getRandomImagePlanets = [
    "https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png/revision/latest?cb=20131214162357",
	"https://static.wikia.nocookie.net/esstarwars/images/4/4a/Alderaan.jpg/revision/latest?cb=20100723184830",
	"https://static.wikia.nocookie.net/esstarwars/images/6/61/Mustafar-TROSGG.png/revision/latest?cb=20201111174744",
	"https://static.wikia.nocookie.net/esstarwars/images/1/1d/Hoth_SWCT.png/revision/latest?cb=20170802030704",
	"https://static.wikia.nocookie.net/esstarwars/images/1/16/Coruscant-EotE.jpg/revision/latest?cb=20221030195452",
	"https://static.wikia.nocookie.net/esstarwars/images/f/f0/Naboo_planet.png/revision/latest?cb=20190928214307",
	"https://static.wikia.nocookie.net/esstarwars/images/5/50/Endor_FFGRebellion.png/revision/latest?cb=20170629163352",
  ];

  const getRandomImageSpecies = [
   "https://static.wikia.nocookie.net/esstarwars/images/f/fa/Modal_Nodes_02.jpg/revision/latest?cb=20120311192558",
   "https://lumiere-a.akamaihd.net/v1/images/databank_ewok_01_169_747db03a.jpeg?region=0%2C0%2C1560%2C878",
   "https://i.ytimg.com/vi/8lsnPyunaO4/maxresdefault.jpg",
   "https://static.wikia.nocookie.net/esstarwars/images/5/50/GeonosianWarriors-LaPR.jpg/revision/latest?cb=20161006203445",
   "https://static.wikia.nocookie.net/esstarwars/images/9/9a/Maul_Neimoidians.png/revision/latest?cb=20140116185438",
   "https://static.wikia.nocookie.net/esstarwars/images/6/61/Gungans.png/revision/latest?cb=20171228221950",
   "https://areajugones.sport.es/wp-content/uploads/2023/07/hutt-esclavos.jpg",
   "https://i.blogs.es/3486be/jawas-01/500_333.jpeg",
   "https://static.wikia.nocookie.net/starwars/images/3/30/Grizzer-SWL81.png/revision/latest?cb=20211103232729",
   "https://www.giantfreakinrobot.com/wp-content/uploads/2024/10/mon-calamari.jpg",
   "https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/noticias-cine/ciencia-averigua-porgs-final-universo-star-wars-los-ultimos-jedi/137782159-1-esl-ES/La-ciencia-averigua-que-los-Porg-podrian-suponer-el-final-del-Universo-Star-Wars.jpg",
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2RIBUBUzgb7OcfWCJqanWcX8XCZ62F_5BAQ&s",
   "https://lumiere-a.akamaihd.net/v1/images/rancor-main_886815df.jpeg?region=204%2C0%2C952%2C536",
   "https://pbs.twimg.com/tweet_video_thumb/FVThxpXXsAILnT_.jpg",
   "https://static.wikia.nocookie.net/esstarwars/images/e/e0/Luketauntaun.jpg/revision/latest?cb=20071021165114",
   "https://i.redd.it/which-species-is-the-best-at-working-v0-ompxfyztjita1.jpg?width=1024&format=pjpg&auto=webp&s=435c657d2ea37fa8f7426ef055198ef1803690fe",
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhUm9uLoQRbRQJiw8Hghf9928l3ge8AHxeLA&s",
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcU5DgzcQSWpa3rJQR653IirQ99bxw4DZVcQ&s",
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6RFGCeGJ8AABqDdIH0mDbdV4EIN2v7awGSQ&s",
   "https://lumiere-a.akamaihd.net/v1/images/twi-lek-main_93917d40.jpeg?region=93%2C0%2C951%2C536",
  ];

  const getRandomImageStarships = [
   "https://lumiere-a.akamaihd.net/v1/images/Death-Star-I-copy_36ad2500.jpeg?region=0%2C0%2C1600%2C900",
   "https://upload.wikimedia.org/wikipedia/en/8/8d/A_screenshot_from_Star_Wars_Episode_IV_A_New_Hope_depicting_the_Millennium_Falcon.jpg",
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDjhhCd1CLhrhsEmZN_JQ1bW6ZZVajrj1QjA&s",
   "https://lumiere-a.akamaihd.net/v1/images/X-Wing-Fighter_47c7c342.jpeg?region=0%2C1%2C1536%2C864",
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4gBRn9fZeoOPH8b6td6AukD0FAV3Q3-72nQ&s",
   "https://static.wikia.nocookie.net/starwars/images/3/30/Executor_BF2.png/revision/latest?cb=20230405071103",
   "https://static.wikia.nocookie.net/starwars/images/3/39/CR90.png/revision/latest?cb=20140412000103",
   "https://lumiere-a.akamaihd.net/v1/images/Star-Destroyer_ab6b94bb.jpeg?region=0%2C0%2C1600%2C900",
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTNVS7snRJy0WI62CgjINs_wTD9hCkc88hjg&s",
   "https://lumiere-a.akamaihd.net/v1/images/databank_republicattackcruiser_01_169_812f153d.jpeg?region=0%2C0%2C1560%2C780",
   "https://preview.redd.it/qujgxkti12s51.jpg?auto=webp&s=27e52de6ccf60ae1e0ea95b174b50734ebb17e7a",
   "https://lumiere-a.akamaihd.net/v1/images/delta-7-starfighter_fe9a59bc.jpeg?region=0%2C304%2C1560%2C873",
  ];

  const getRandomImageVehicles = [
   "https://static.wikia.nocookie.net/starwars/images/f/ff/Sandcrawler.png/revision/latest?cb=20130812001443",
   "https://lumiere-a.akamaihd.net/v1/images/E4D_IA_1136_6b8704fa.jpeg?region=237%2C0%2C1456%2C819",
   "https://diceandcardboard.com/content/images/2022/06/7D447526-4083-44FC-BAAD-FEBA5A3872B0.jpeg",
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRflI9PbxLNKAWH-k50LTPak1_N5ve_lb8pow&s",
   "https://lumiere-a.akamaihd.net/v1/images/AT-AT_89d0105f.jpeg?region=214%2C19%2C1270%2C716",
   "https://lumiere-a.akamaihd.net/v1/images/e6d_ia_5724_a150e6d4.jpeg?region=124%2C0%2C1424%2C802",
   "https://www.brickfanatics.com/wp-content/uploads/2023/03/Star-Wars-Return-of-the-Jedi-Jabbas-Sail-Barge.jpg",
   "https://i.ytimg.com/vi/HdHQC3-roe4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDJq0GouDkyhmsoQE1aIzf3pEfVhw",
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyhTJ3qVhrVnB-cVkm-oaXl4JrqUvoa44vww&s",
  ];

  const getRandomImageFilms = [
    "https://es.digitaltrends.com/wp-content/uploads/2024/04/episodio-1.jpeg?p=1",
	"https://static.wikia.nocookie.net/starwars/images/d/dd/Attack-Clones-Poster.jpg/revision/latest/smart/width/386/height/259?cb=20180318125654",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1FiQqM8gYiNb5wP8ewbgcCU3srQ7mUy8tOQ&s",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdAggqLoszoqyxJ7_Dbg6Bjl-lWkaoZj9-ZQ&s",
	"https://live.staticflickr.com/65535/51928070369_8155489c77_h.jpg",
	"https://images-2.rakuten.tv/storage/snapshot/shot/a0a005f7-3dfe-4044-b18c-ff5802b65983-snapshot-1590664638.jpeg",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ2EY_KD5ALGsmEmrt5MKT8lqToZTHiWePUw&s",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKHzP0D7HadgfQzHVUcdqZ9iVB6-JotPF3ow&s",
	"https://static1.srcdn.com/wordpress/wp-content/uploads/2019/11/Star-Wars-The-Rise-of-Skywalker-Featured-Image-1710x900.jpg",
	"https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2021/10/rogue-one-historia-star-wars-2491861.jpg?tf=3840x",

  ];

  // Función para obtener una imagen aleatoria de una categoría
  const getRandomImage = (category) => {
    return category[Math.floor(Math.random() * category.length)];
  };

  return (
    <div className="text-center mt-5">
      <div className="photo-grid-home">
	  <div className="image-container">
		<Link to="/characters">
          <img
            src={getRandomImage(getRandomImageCharacters)}
            alt="Characters"
          />
		  <div className="text-overlay">Characters</div>
        </Link>
		</div>
         
		<div className="image-container">
		 <Link to="/planets">
          <img
            src={getRandomImage(getRandomImagePlanets)}
            alt="Planets"
          />
		  <div className="text-overlay">Planets</div>
         </Link>
		 </div>
        
		 <div className="image-container">
		<Link to="/species">
          <img
            src={getRandomImage(getRandomImageSpecies)}
            alt="Species"
          />
		  <div className="text-overlay">Species</div>
        </Link>
		</div>
        
		<div className="image-container">
		<Link to="/starships">
          <img
            src={getRandomImage(getRandomImageStarships)}
            alt="Starships"
          />
		  <div className="text-overlay">Starships</div>
        </Link>
		</div>
        
		<div className="image-container">
		<Link to="/vehicles">
          <img
            src={getRandomImage(getRandomImageVehicles)}
            alt="Vehicles"
          />
		  <div className="text-overlay">Vehicles</div>
        </Link>
		</div>
        
		<div className="image-container">
		<Link to="/films">
          <img
            src={getRandomImage(getRandomImageFilms)}
            alt="Films"
          />
		  <div className="text-overlay">Films</div>
        </Link>
		</div>
      </div>
    </div>
  );
};
