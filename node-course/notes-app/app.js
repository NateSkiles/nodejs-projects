const validator = require('validator')
const getNotes = require('./notes.js')
// Define and use a function in a new file

const notes = getNotes()
console.log(notes)

console.log(validator.isURL('http://nateskiles.me'))









// const add = require('./utils.js')
// const name = 'Nate'
// sum = add(4, -2)
// console.log(sum)
