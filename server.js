const express = require('express'),
    // Sellout = require('./database/sellout'),
    SQLQuery = require('./database/sql-queries'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    jwt = require('jsonwebtoken');
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

server.get('/api/users', (req, res) => {
    const dni = req.query.dni;

    SQLQuery.getUsers(dni).then(response => {


        jwt.sign({ user: dni }, process.env.SECRET_KEY_JWT, { expiresIn: '1d' }, function (err, token) {
            if (err) {
                console.log(err);
                res.sendStatus(403)
            } else {
                console.log('process.env.SECRET_KEY_JWT', process.env.SECRET_KEY_JWT);

                response[0]['token'] = token
                // response[0]['expiresIn'] = token

                res.status(200).send(response)
            }

        });



    })
})

server.get('/api/videos', (req, res) => {
    const category = req.query.category;

    SQLQuery.getVideos(category).then(response => {
        res.send(response)
    })
})

server.get('/api/vote', (req, res) => {
    const { dni, category } = req.query;

    SQLQuery.getVote(dni, category).then(response => {
        res.send(response)
    })
})

server.post('/api/vote', (req, res) => {
    
    if (Object.keys(req.body).length > 0 ) {
        const { videoId, dni, category } = req.body;

        // console.log(request);

        SQLQuery.sendVote(videoId, dni, category).then(response => {
            res.json({
                message: 'Se guardo tu voto con éxito',
                status: 'successful'
            })
        }).catch(() => {
            res.json({
                message: 'Hubo un problema con el registro',
                status: 'failed'
            })
        })
    } else {
        res.json({
            message: 'No se encontraron datos para guardar',
            status: 'failed'
        })
    }
})





