const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			films: [],
			people: [],
			species: [],
			planets: [],
			starships: [],
			vehicles: [],
			favorites: [],

		},

		actions: {
			addToFavorites: (item) => {
				console.log(item)
				const store = getStore();
				const isAlreadyFavorite = store.favorites.includes(item);
				if (!isAlreadyFavorite) {
					setStore({
						favorites: [...store.favorites, item]
					});
				}
			},
			
		
			removeFromFavorites: (uid, type) => {
				console.log(uid, type)
				const store = getStore();
				const newFavorites = store.favorites.filter((fav) => !(fav.uid === uid && fav.type === type))
				console.log(newFavorites)
				setStore({
					favorites: newFavorites
				});
			},
			
			getAllPeople: async () => {
				try {
				  const response = await fetch("https://www.swapi.tech/api/people/");
				  if (!response.ok) throw new Error(response.statusText);
			  
				  const fetchData = await response.json();
			  
				  if (fetchData && fetchData.results) {
					setStore({ people: fetchData.results }); 
				  }
				} catch (error) {
				  console.error("Error fetching people:", error);
				}
			  },
			  


			getPeople: async (uid) => {
				try {
					const response = await fetch(`https://www.swapi.tech/api/people/${uid}`);
					if (!response.ok) throw new Error(response.statusText);
					const fetchData = await response.json();
					return fetchData.result;
				} catch (error) {
					console.log(error);
				}
			},



			getAllSpecies: async () => {
				try {
				  const response = await fetch("https://www.swapi.tech/api/species/");
				  if (!response.ok) throw new Error(response.statusText);
			  
				  const fetchData = await response.json();
			  
				  if (fetchData && fetchData.results) {
					setStore({ species: fetchData.results }); 
				  }
				} catch (error) {
				  console.error("Error fetching species:", error);
				}
			  },


			getSpecies: async (uid) => {
				try {
					const response = await fetch(`https://www.swapi.tech/api/species/${uid}`);
					if (!response.ok) throw new Error(response.statusText);
					const fetchData = await response.json();
					return fetchData.result;
				} catch (error) {
					console.log(error);
				}
			},

			getAllFilms: async () => {
				try {
					const response = await fetch("https://www.swapi.tech/api/films/");
					if (!response.ok) throw new Error(response.statusText);

					const fetchData = await response.json();

					if (fetchData && fetchData.result) {
						setStore({ films: fetchData.result });
					}
				} catch (error) {
					console.error("Error fetching films:", error);
				}
			},

			getFilm: async (uid) => {
				try {
					const response = await fetch(`https://www.swapi.tech/api/films/${uid}`);
					if (!response.ok) throw new Error(response.statusText);
					const fetchData = await response.json();
					return fetchData.result;
				} catch (error) {
					console.log(error);
				}
			},

			getAllStarships: async () => {
				try {
					const response = await fetch("https://www.swapi.tech/api/starships/");
					if (!response.ok) throw new Error(response.statusText);
					const fetchData = await response.json();
					if (fetchData) setStore({ starships: fetchData.results });
					console.log(getStore().starships);
				} catch (error) {
					console.log(error);
				}
			},


			getStarship: async (uid) => {
				try {
					const response = await fetch(`https://www.swapi.tech/api/starships/${uid}`);
					if (!response.ok) throw new Error(response.statusText);
					const fetchData = await response.json();
					return fetchData.result;
				} catch (error) {
					console.log(error);
				}
			},

			getAllPlanets: async () => {
				try {
					const response = await fetch("https://www.swapi.tech/api/planets/");
					if (!response.ok) throw new Error(response.statusText);
					const fetchData = await response.json();
					if (fetchData) setStore({ planets: fetchData.results });
					console.log(getStore().planets);
				} catch (error) {
					console.log(error);
				}
			},



			getPlanet: async (uid) => {
				try {
					const response = await fetch(`https://www.swapi.tech/api/planets/${uid}`);
					if (!response.ok) throw new Error(response.statusText);
					const fetchData = await response.json();
					return fetchData.result;
				} catch (error) {
					console.log(error);
				}
			},

			getAllVehicles: async () => {
				try {
					const response = await fetch("https://www.swapi.tech/api/vehicles/");
					if (!response.ok) throw new Error(response.statusText);
					const fetchData = await response.json();
					if (fetchData) setStore({ vehicles: fetchData.results });
					console.log(getStore().vehicles);
				} catch (error) {
					console.log(error);
				}
			},


			getVehicles: async (uid) => {
				try {
					const response = await fetch(`https://www.swapi.tech/api/vehicles/${uid}`);
					if (!response.ok) throw new Error(response.statusText);
					const fetchData = await response.json();
					return fetchData.result;
				} catch (error) {
					console.log(error);
				}
			},

		},
	}
}






export default getState;
