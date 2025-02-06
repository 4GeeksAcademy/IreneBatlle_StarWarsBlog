import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../styles/index.css";

import { Home } from "./views/home";
import injectContext from "./store/appContext";
import { Characters } from "./views/characters";
import { Films } from "./views/films";
import { Planets } from "./views/planets";
import { Species } from "./views/species";
import { Starships } from "./views/starships";
import { Vehicles } from "./views/vehicles";
import { PlanetInfo } from "./views/planetsPage";
import { CharacterInfo } from "./views/charactersPage";
import { FilmInfo } from "./views/filmsPage";
import { StarshipInfo } from "./views/starhsiphsPage";
import { VehicleInfo } from "./views/vehiclesPage";
import { SpeciesInfo } from "./views/speciesPage";



import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {

	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/characters" element={<Characters />} />
					<Route path="/films" element={<Films />} />
					<Route path="/species" element={<Species />} />
					<Route path="/starships" element={<Starships />} />
					<Route path="/vehicles" element={<Vehicles />} />
					<Route path="/planets" element={<Planets />} />
					<Route path="/planets/:uid" element={<PlanetInfo />} />
					<Route path="/characters/:uid" element={<CharacterInfo />} />
					<Route path="/films/:uid" element={<FilmInfo />} />
					<Route path="/starhips/:uid" element={<StarshipInfo />} />
					<Route path="/vehicles/:uid" element={<VehicleInfo />} />
					<Route path="/species/:uid" element={<SpeciesInfo />} />
					<Route path="*" element={<h1>Not found!</h1>} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
