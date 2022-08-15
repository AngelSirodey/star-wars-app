import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";

import { StarWarsProvider } from '../../Store/CharacterContext';
import { MOCKED_SINGLE_CHARACTER } from '../../utils/testsMockedData';
import Card from './Card';

describe('Card behaviour', () => {

    test('renders content', () => {
        const component = render(
            <StarWarsProvider>
                <MemoryRouter>
                    <Card character={ MOCKED_SINGLE_CHARACTER } />
                </MemoryRouter>
            </StarWarsProvider>
        );
        component.getByText('Luke Skywalker');
    });

    test('clicking link button', () => {
        const mockHandlerClick = jest.fn();
        const component = render(<a onClick={ mockHandlerClick }>Luke Skywalker</a>);
        const linkButton = component.getByText('Luke Skywalker');
        
        fireEvent.click(linkButton);
        expect(mockHandlerClick.mock.calls).toHaveLength(1);
    });
});
