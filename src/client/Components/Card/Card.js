import React from 'react';
import { Link } from "react-router-dom";

import { useCharacterContext } from '../../Store/CharacterContext';

import './Card.css';

const Card = ({ character }) => {
    const { name, birth_year, films} = character;
    const detailsURL = '/details';
    const { saveCharacter } = useCharacterContext();

    const handelSaveContextData = ()=> {
        saveCharacter(character);
    };

    return (
        <div className="Card__container">
            <div className="Card__links">
                <Link onClick={ handelSaveContextData } to={ detailsURL } className="Card__title">{ name }</Link>
            </div>
            <div className="Card__description">
                <p className="Card__text">{ films.length } films</p>
                <p className="Card__text">birth year: { birth_year }</p>
            </div>
        </div>
    );
};

export default Card;
