const express = require('express');
const { DEFAULT_PORT, FRONTEND_APP_URL } = require("./constants/constants");
const app = express();

// Serve the React app
app.use(express.static('client/build'));

// CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', FRONTEND_APP_URL);
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Parse JSON request bodies
app.use(express.json());

// Add routers
app.use(require('./routes'));

// Start the server
const PORT = process.env.PORT || DEFAULT_PORT;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = app;
