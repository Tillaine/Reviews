const express =  require('express');
const morgan = require('morgan');
const mysql = require('mysql')
const Port = 3000;
const db = require('./database')

// creating server 
const app = express();

// ***********************************
// middleware
// ***********************************
// logging requests 
app.use(morgan('dev'))
//turning requests into json
app.use(express.json());
//



// ***********************************
// routes 
// ***********************************
// send static files to client
app.use(express.static('./client/dist'))

// get all moves 
app.get('/api/reviews', (req, res) => {
   res.send(200)
});


app.listen(Port)