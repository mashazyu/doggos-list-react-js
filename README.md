# About the Project

## Task

The goal of the project is to implement a simple page that
- displays a sectioned list of the dogs with basic information about them,
- allows to group elements by different categories (name, company, country),
- allows filtering of the items based on the given filter and selected category.

For styling of the page was used Chakra UI component library. Also some basic tests are introduced.

You can check out the result online here - [https://stiff-current.surge.sh/](https://stiff-current.surge.sh/).

## Technical Details

- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- [Chakra-UI](https://chakra-ui.com/) is used for (responsive) styling.
- To generate data were used [Faker](https://github.com/faker-js/faker) and [Dog API](https://dog.ceo/dog-api/).

# Setup Instructions & Available Scripts

First of all, please run `npm i` to install project dependencies.

In the project directory, you can run:

## `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Configuration for doggo-api repo

To make this app fetch data from the [doggo-api](https://github.com/mashazyu/doggo-api), please
- run api locally following the instructions in repo (it is assumed that api is listening on http://127.0.0.1:3000),
- in src/contexts/DataContext comment lines 10-15 and uncomment lines 17-26.
