# star-wars-app

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to start:

In the project directory run `npm install` to install all the dependencies.\
Then, run `npm start`.

## Available Scripts

In the project directory, you can run:

### `npm install`

Install all the dependencies.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Project description:

There is a Home page that load some cards (Star Wars characters). Also there is a button that will load more cards.
The name of the character is a link to the details page (/details).
The details page has more info of the characteraAnd there is an arrow button in the top to go back to the home.

## Project dependencies:

I used react hooks [react-hooks](https://reactjs.org/docs/hooks-intro.html) to manage the state of the components and also to createa a context to get the data of the character in the details.
So I can save the data of the character and consume anywhere.
I used react-router-dom for the route of the page.
For the test I used Jest with react-testing-library [react-testing-library](https://testing-library.com/docs/react-testing-library/intro/) and
testing-library/jest-dom [jest-dom](https://testing-library.com/docs/ecosystem-jest-dom/) to facilitate the tests.
