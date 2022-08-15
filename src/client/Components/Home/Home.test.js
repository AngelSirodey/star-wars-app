import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";

import { StarWarsProvider } from '../../Store/CharacterContext';
import Home from './Home';
import Card from '../Card/Card';

describe('Home behaviour', () => {

    test('renders content', () => {
        const component = render(<Home />);
        component.getByText('Star Wars Characters');
    });
   
    test('clicking the button load more once', () => {
        const mockHandlerClick = jest.fn();
        const component = render(<button onClick={mockHandlerClick}>Load more</button>);
        const button = component.getByText('Load more');
        
        fireEvent.click(button);
        expect(mockHandlerClick.mock.calls).toHaveLength(1);
    });

    test('Load 3 Card components', async () => {
        const component = render(
            <StarWarsProvider>
                <MemoryRouter>
                    <Home>
                        <Card />
                    </Home>
                </MemoryRouter>
            </StarWarsProvider>
        );

        const cardComponent = await component.findAllByText(/birth year:/i);
        expect(cardComponent[0]).toBeInTheDocument();
    });
    
});
