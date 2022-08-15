import React, { useState, useContext } from 'react';

export const AppContext = React.createContext();

const StarWarsProvider = ({children}) => {	
  const [characterData, setCharacterData] = useState({});
	return (
		<AppContext.Provider value={{character: [characterData, setCharacterData]}}>
			{children}
		</AppContext.Provider>
	);
};

const useCharacterContext = () => {
	const { character } = useContext(AppContext);
	const [characterData, setCharacterData] = character;

	const saveCharacter = (characterF) => {
		setCharacterData(characterF);
		localStorage.setItem('character', JSON.stringify(characterF));
	};

	return {
		setCharacterData,
		characterData,
		saveCharacter
	}
}

export { StarWarsProvider, useCharacterContext };
