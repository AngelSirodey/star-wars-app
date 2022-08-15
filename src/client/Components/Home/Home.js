import React, { useEffect, useState } from 'react';

import Card from '../Card';
import { getAllCharacters } from '../../../server';

import './Home.css';

const Home = () => {
    let windowSize = window.innerWidth;
    const cardsToShow = windowSize > 450 ? 9 : 3;
    const [characters, setCharacters] = useState(null);
    const [loadMore, setLoadMore] = useState(cardsToShow);

    useEffect(() => {
        getAllCharacters().then(setCharacters);
    }, []);

    const handleAdd = () => {
        setLoadMore(loadMore + cardsToShow);
    };
    const handleRemove = () => {
        setLoadMore(cardsToShow);
    };

    return (
        <div className="Home__container">
            <h1 className="Home__title">Star Wars Characters</h1>
            <div className="Home__cardsContainer">
                {characters ? (
                    characters.results.slice(0, loadMore).map(character => <Card key={ character.name } character={ character } />)
                ) : null}
            </div>
            <div className="Home__buttonContainer">
                {loadMore >= characters?.results.length ?
                <button type="button" onClick={ handleRemove } className="Home__button">Restart</button> :
                <button type="button" onClick={ handleAdd } className="Home__button">Load more</button>}
            </div>
        </div>
    )
}

export default Home;
