// CRUD
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

// Connection URL
const connectionURL = 'mongodb://127.0.0.1:27017'
const database = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        console.log('Unable to connect to database 😢')
    }

    console.log('Connect correctly! 😁
})