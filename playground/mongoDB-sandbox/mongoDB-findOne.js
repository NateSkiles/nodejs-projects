const { MongoClient, ObjectId } = require('mongodb');

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
    const collection = db.collection('users');

    // Find user by name
    // const user_1 = await collection.findOne({ name: 'Alice' })
    // console.log(user_1);

    // Returns null - not a valid ObjectId object
    // const user_2 = await collection.findOne({ _id: '628af9f04a59c3b8d9fb4385' })
    // console.log(user_2);

    // Created Object ID object to query db with
    // const id = new ObjectId('628af9f04a59c3b8d9fb4385')
    // const user_4 = await collection.findOne({ _id: id })

    // console.log(user_4);

    return ('\nDone. ✅');
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());