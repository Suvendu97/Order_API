// express server
const express = require('express');
const app = express();


// port to be used
const port =  8000;


// Database
const db = require('./config/mongoose');

app.use(express.urlencoded());

//express router
app.use('/', require('./routes'));


app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});
