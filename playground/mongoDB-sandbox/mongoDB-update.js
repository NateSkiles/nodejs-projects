const { MongoClient, ObjectId } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(connectionURL);

const databaseName = 'task-manager';


async function main() {
    await client.connect();
    console.log('Connected to servers');

    const collection = client.db(databaseName).collection('users');
    const id = await new ObjectId('628af57a989a9092c824daa0')

    const users1 = await collection.updateOne({ _id: id }, { $set: { name: 'James' }})
    const users2 = await collection.updateOne({ _id: id }, { $inc: { age: 1 }})

    console.log(users1);
    console.log(users2);
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close())