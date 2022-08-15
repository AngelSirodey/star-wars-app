import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import { useCharacterContext } from '../../Store/CharacterContext';
import { getCharacterFilms } from '../../../server';
import './CharacterDetails.css';

const storageF = JSON.parse(localStorage.getItem('character'));

const CharacterDetails = () => {
    const { characterData } = useCharacterContext();
    const character = storageF || characterData;
    const [filmTitle, setFilmTitle] = useState([]);
	const { name, films, height, mass, hair_color, skin_color, eye_color, birth_year, gender } = character;
    
	useEffect(() => {
        let unsubscribed = false;
		
		films?.map(film => getCharacterFilms(film).then(
			characterFilmsRes => {
				!unsubscribed && setFilmTitle(prevState => ([...prevState, characterFilmsRes.title]))
			}
		));

		return () => {			
			unsubscribed = true;
        };

	}, [films]);

	return (
		<div>
			<div>
                <Link to="/"><span className="arrow left"></span></Link>
            </div>
			<div>
				<p className="Details__title">{ name }</p>
			</div>
			<div className="Details__info">
				<p>Height: { height }</p>
				<p>Gender: { gender }</p>
				<p>Mass: { mass }</p>
				<p>Hair color: { hair_color }</p>
				<p>Eye color: { eye_color }</p>
				<p>Skin color: { skin_color }</p>
				<p>Birth year: { birth_year }</p>
			</div>
            <div className="Details__listContainer">
                <label className="Details__text">Films :</label>
                {filmTitle ? (
                    <ul className="Details__list">
                {filmTitle.map((title, index) => <li key={ index }>{title}</li>)}  
            </ul>
            ) : <p>Loading films...</p>}
            </div>
		</div>
	);

};

export default CharacterDetails;
