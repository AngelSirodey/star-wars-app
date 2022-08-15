import React from 'react';
import { Routes, Route } from "react-router-dom";

import { StarWarsProvider } from './client/Store/CharacterContext';
import Home from './client/Components/Home';
import CharacterDetails from './client/Components/CharacterDetails';

function App() {

    return (
        <StarWarsProvider>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/details" element={<CharacterDetails />} />
            </Routes>
        </StarWarsProvider>
    );
};

export default App;
