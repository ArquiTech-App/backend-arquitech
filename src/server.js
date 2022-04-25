const express = require('express');
const cors = require('cors');
const office = require('./Routers/office');
const projects = require('./Routers/projects');
const upload = require('./Routers/uploads');

const server = express();


server.use(express.json());
server.use(cors());
server.use('/', office);
server.use('/', projects);
server.use('/', upload);


module.exports = server