// CRUD
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

// Connection URL
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        console.log('Unable to connect to database 😢')
    }

    const db = client.db(databaseName)


    // Insert One
    // db.collection('users').insertOne({
    //     name: 'Nate',
    //     age: 27
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user');
    //     }

    //     console.log(result.insertedId);
    // })

    // Insert Many
    db.collection('users').insertMany([
        {
            name: 'Alice',
            age: 32
        },
        {
            name: 'Jake',
            age: 27
        }
    ], (err, res) => {
        if (err) {
            return console.log('Unable to insert documents!')
        }

        console.log(res.insertedIds)
    })

})