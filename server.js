// //////////// Express //////////////

const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const port = 5555;

// Set the templating engine
app.set('view engine', 'ejs');
app.use(expressLayouts);

// Route our app
const router = require('./routes');

app.use('/', router);

// Set static files ( css & images etc )
app.use(express.static(`${__dirname}/src`));

// Start the server
app.listen(port, () => {
  console.log('HTML only server is running');
});
