const mongoose = require('mongoose')
const validator = require('validator');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api')

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        default: null,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a positive number')
            }
        }
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Invalid email.')
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 7,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password cannot contain the word \'password\'')
            }
        }
    }
})

const Task = mongoose.model('Task', {
    description: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        trim: true,
        default: false
    }
})

// const myUser = new User({
//     name: 'Nate',
//     age: 27,
//     email: 'projects@nateskiles.io',
//     password: 'PaSsWord123'
// })


// myUser.save().then((result) => {
//     console.log(myUser);
// }).catch((err) => {
//     console.log(err);
// });

const myTask = new Task({
    description: 'Learn mongoose.js'
})

myTask.save()
    .then(() => console.log(myTask))
    .catch((err) => console.log(err))