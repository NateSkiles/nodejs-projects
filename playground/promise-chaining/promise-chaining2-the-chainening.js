require('../../task-manager/src/db/mongoose')
const Task = require('../../task-manager/src/models/task')

// User.findByIdAndUpdate('6298467d0b53e756fbcd3fdc', { age: 27 }).then((user) => {
//     console.log(user);
//     return User.countDocuments({ age: 27 })
// }).then((result) => {
//     console.log(result);
// }).catch((e) => {
//     console.log(e);
// })



// 1. Load in task model
// 2. Remove a given task
// 3. Get and print the total number incomplete tasks

// Task.findByIdAndDelete('629845e305b4b71a425fb59d').then((task) => {
//     console.log(`Task "${task.description}" was removed.`);

//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result);
// }).catch((e) => {
//     console.log(e);
// })


// 1. Create deleteTaskAndCount as an async function
//      - Accept id of task to remove
// 2. Use await to delete task and count up incomplete tasks
// 3. Return the count
// 4. Call the function and attach then/catch to log results
// 5. Test

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.count()

    return count
}

deleteTaskAndCount('6294fe76e82c7f7206dd391d').then((count) => {
    console.log(count)
}).catch((e) => console.log(e))



