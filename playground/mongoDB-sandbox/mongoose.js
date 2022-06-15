const mongoose = require('mongoose')

// mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api')

// const User = mongoose.model('User', {
//     name: {
//         type: String
//     },
//     age: {
//         type: Number
//     }
// })

// const me = new User({
//     name: 'Nate',
//     age: 'test'
// })

// me.save().then((result) => {
//     console.log(me);
// }).catch((err) => {
//     console.log('Error!', err);
// })

// 
// Create a modal for tasks
// 
// Define the model with description and completed fields
// Create a new instance of the model
// Save the model to the database
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api')

const Task = mongoose.model('Task', {
    description: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean
    }
})

const task = new Task({ description: 'build task api using mongoose', completed: false })

task.save().then((result) => {
    console.log(task);
}).catch((err) => {
    console.log(err);
});