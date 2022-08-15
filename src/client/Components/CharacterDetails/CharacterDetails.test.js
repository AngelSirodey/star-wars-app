import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";

import { StarWarsProvider } from '../../Store/CharacterContext';
import CharacterDetails from './CharacterDetails';

describe('CharacterDetails behaviour', () => {

    test('render component', () => {
        const component = render(
            <StarWarsProvider>
                <MemoryRouter>
                    <CharacterDetails />
                </MemoryRouter>
            </StarWarsProvider>
        );
        
        const characterDetailsComponent =  component.getByText('Height:');
        expect(characterDetailsComponent).toBeInTheDocument();
       
    });

});
