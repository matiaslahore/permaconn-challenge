# Permaconn challenge

## Exercise

Create a webpage that shows a list of Products with the ability to add a new product and edit existing products.
The frontend should be in React and all the data has to be served through an API backend using ExpressJs framework in NodeJs

Use dummy api's from https://dummyjson.com/docs/products for all actions

#### Bonus:
1. Ability to dockerise the code
2. Tests included in the API backend code
3. Search from the list of products

-----

## ¿How to run?

### `docker build -t permaconn-challenge .`
### `docker run -p 3000:3000 permaconn-challenge`

The App should be running, open [http://localhost:3000](http://localhost:3000) to view it in your browser.

Both Apps are running using the same Docker.\
This was created just for easy running the App.\
In Production you should create two Dockers, one for each App (Node and React).

-----

## Testing

### `npm test`

Launches the e2e (End to End) tests for the Node.js App.

-----

## Libraries used

#### Redux Toolkit: For store the products
#### Tailwind: Easy plug and play library for UI
#### Axios: For fetching data to APIs
#### Jest: Dev dependency for testing support

-----
