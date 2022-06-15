const { MongoClient, ObjectId } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(connectionURL);

const databaseName = 'task-manager';


async function main() {
    await client.connect();
    console.log('Connected to servers');

    const collection = client.db(databaseName).collection('users');

    const filter = { age:27 };

    const deleteDoc = await collection.deleteMany(filter);

}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close())