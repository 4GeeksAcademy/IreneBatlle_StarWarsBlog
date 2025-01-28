import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../styles/index.css";

import { Home } from "./views/home";
import injectContext from "./store/appContext";
import { Characters } from "./views/home";
import { Films } from "./views/home";
import { Planets } from "./views/home";
import { Species } from "./views/home";
import { Starhips } from "./views/home";
import { Vehicles } from "./views/home";


import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
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
						<Route path="/starships" element={<Starhips />} />
						<Route path="/vehicles" element={<Vehicles />} />
						<Route path="/planets" element={<Planets />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
