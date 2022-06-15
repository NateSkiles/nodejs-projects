const { MongoClient, ObjectId } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dbName = 'task-manager';

async function main() {
    await client.connect();
    console.log('Connect to server');;

    const db = client.db(dbName);
    const collection = db.collection('tasks');

    // 1) Use findOne to fetch the last task by its id
    const id = new ObjectId('628afc5b4e65ff7d9baef35d')
    const lastTask = await collection.findOne({ _id: id });

    console.log(`1)\n\n${lastTask}`);

    // 2) Use fine to fetch all tasks that are not completed
    const query = { completed: false }
    const unfinishedTasks = await collection.find(query).toArray();

    console.log(`2)\n\n${unfinishedTasks}`);

    unfinishedTasks.forEach(task => {
        console.log(task)
    });

    return('\nFinished.')
}


main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());