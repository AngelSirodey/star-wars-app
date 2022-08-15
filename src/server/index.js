import { API_HOST } from "./config/secrets";

export function getAllCharacters() {
	const url = `${API_HOST}/people`;
	return fetch(url)
		.then((response) => response.json())
		.catch((e) => {
			console.log(e);
			return {};
		});
};

export function getCharacterDetail(characterId) {
	const url = `${API_HOST}/people/${characterId}`;
	return fetch(url)
		.then((response) => response.json())
		.catch((e) => {
			console.log(e);
			return {};
		});
};


export function getCharacterFilms(filmUrl) {
	const url = filmUrl;
	return fetch(url)
		.then((response) => response.json())
		.catch((e) => {
			console.log(e);
			return {};
		});
};