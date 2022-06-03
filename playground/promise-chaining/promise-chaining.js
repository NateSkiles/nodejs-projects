require('./mongoose')
const User = require('./user')

User.findByIdAndUpdate('6298467d0b53e756fbcd3fdc', { age: 27 }).then((user) => {
    console.log(user);
    return User.countDocuments({ age: 27 })
}).then((result) => {
    console.log(result);
}).catch((e) => {
    console.log(e);
})