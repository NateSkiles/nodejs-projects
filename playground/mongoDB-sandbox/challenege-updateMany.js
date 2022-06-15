const { MongoClient } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(connectionURL);

const databaseName = 'task-manager';

// Use updateMany to complete all tasks
// 
// 1. Read updateMany docs 
// 2. Setup the call with the query and the updates
// 3. Use promise methods to setup success/error handlers


async function main() {
    await client.connect();
    console.log('Connected to servers');

    const collection = await client.db(databaseName).collection('tasks');

    const filter = {
        completed: false
    }

    const updateDoc = {
        $set: {
            completed: true
        }
    }

    const update = await collection.updateMany(filter, updateDoc)

    console.log(update);
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close())