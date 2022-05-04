require('dotenv').config()

const server = require('./src/server')

const dbConnect = require('./src/lib/db')

const PORT = process.env.PORT || 8080

dbConnect() 
    .then(() => {
        console.log('Database Connected: ')
        server.listen (PORT, () => {
            console.log('Server Running on Port 8080');
        })
    })
    .catch((error) => {
        console.log('Error: ', error)
    })
