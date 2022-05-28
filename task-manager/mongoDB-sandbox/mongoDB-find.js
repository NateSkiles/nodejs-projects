const { MongoClient } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(connectionURL);

const databaseName = 'task-manager';


async function main() {
    await client.connect();
    console.log('Connected to servers');
    
    const collection = client.db(databaseName).collection('users');

    const users = await collection.find({age:27}).toArray()

    console.log(users);
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close())