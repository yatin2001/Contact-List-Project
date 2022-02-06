'use strict';
const express = require('express');
const cors = require('cors');
// const bodyParser = require('body-parser');
const config = require('./config');


//custom routes
const contactRoutes = require('./routes/contact-routes');

const app = express();

app.use(express.json());
app.use(cors());
// app.use(bodyParser.json());

//contact routes
app.use('/api', contactRoutes.routes);

//intial route
app.get('/', (req, res)=>{res.send("welcome to yatin's contact app")});

//stats the server
app.listen(config.PORT, () => console.log('App is listening on url ', config.HOST_URL));