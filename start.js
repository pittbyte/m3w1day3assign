//tell app listen on 3000 for incoming connections and output a message//
const app = require('./app');

const server = app.listen(3000, function() {
    console.log(`Express is running on port ${server.address().port}`);
});
//Importing the express app for app.js//
