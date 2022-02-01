const express = require('express'),
    // Sellout = require('./database/sellout'),
    SQLQuery = require('./database/sql-queries'),
    bodyParser = require('body-parser'),
    cors = require('cors');
    // https = require('https'),
    // http = require('http'),
    // fs = require('fs'),
    // path = require('path')
    


const API_PORT = process.env.API_PORT || 5000;
const server = express();
server.use(cors());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

server.listen(API_PORT, () => {
    console.log('Listening on port:', API_PORT)
    
})

server.get('/api/users/', (req, res) => {
    const dni = req.query.dni;

    SQLQuery.getUsers(dni).then(response => {
        res.send(response)
    })
})





