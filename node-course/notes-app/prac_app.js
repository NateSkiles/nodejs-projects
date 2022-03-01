// A test file to learn the basics of importing and using modules

const validator = require('validator');
const getNotes = require('./notes.js');
const chalk = require('chalk');


console.log(process.argv)



// console.log(chalk.bold.rgb(10, 100, 200)('Hello!'));

// Tagged template literal
// Blocks are delimited by curly braces with content inside
// const miles = 18;
// const calculateFeet = miles => miles * 5280;

// console.log(chalk`
//         There are {bold 5289 feet in a mile.
//         In {bold ${miles} miles}, there are {green.bold ${calculateFeet(miles)}} feet}.
//         `);ds



// console.log(chalk.green('Success'))
// let name = 'chalk'
// console.log(chalk.blue.italic('Fun with %s'), name.toUpperCase())




// const notes = getNotes()
// console.log(notes)


// Validator
// console.log(validator.isURL('http://nateskiles.me'))



// const add = require('./utils.js')
// const myName = 'Nate'
// sum = add(4, -2)
// console.log(sum)
