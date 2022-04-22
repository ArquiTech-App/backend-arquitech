const express = require('express');
<<<<<<< HEAD
const routerOffice = require('./Routers/offices')
const routerClient = require('./Routers/clients')
const routerProject = require('./Routers/projects')
=======
const cors = require('cors');
const office = require('./Routers/office');
const projects = require('./Routers/projects');
>>>>>>> 9bc41a02fb65f9939949bff45c78f8efd86ab2d5

const server = express();
server.use('/offices', routerOffice)
server.use('/clients', routerClient)
server.use('/projects', routerProject)


server.use(express.json());
server.use(cors());
server.use('/', office);
server.use('/', projects);


module.exports = server