// Goal: Insert 3 tasks into a new tasks collection
// 
// 1. User insertMany to insert three documents
//      - Description (str), completed (bool)
// 2. Setup the callback to handle error & print result IDs
// 3. Run the script

const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// DB Name
const dbName = 'task-manager';

async function main() {
    // Connect to server
    await client.connect();
    console.log('Connect to server');
    const db = client.db(dbName);
    const collection = db.collection('tasks');

    // Insert many into collection
    const insertResult = await collection.insertMany([
        {
            description: 'Clean litter boxes',
            completed: true
        },
        {
            description: 'Finish clock app',
            completed: false
        },
        {
            description: 'Go to grocery store',
            completed: false
        }
    ])

    console.log('Inserted documents =>', insertResult);

    return ('done. ');
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());