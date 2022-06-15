require('../../task-manager/src/db/mongoose')
const User = require('../../task-manager/src/models/user');

// User.findByIdAndUpdate('6298467d0b53e756fbcd3fdc', { age: 27 }).then((user) => {
//     console.log(user);
//     return User.countDocuments({ age: 27 })
// }).then((result) => {
//     console.log(result);
// }).catch((e) => {
//     console.log(e);
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findOneAndUpdate(id, { age })
    const count = await User.countDocuments({ age })

    return count
}

updateAgeAndCount('6298467d0b53e756fbcd3fdc', 27).then ((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})