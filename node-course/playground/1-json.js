const fs = require('fs')

// Challenge: Work with JSON and the file system 

// 1. Load and parse the JSON data
// 2. Change the name and age property using your info
// 3. Stringify the changed object and overwrite the original data
// 4. Test your work by viewing data in the JSON file

const dataBuffer = fs.readFileSync('2-join.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

console.log(data.name)
console.log(data.age)

data.name = 'Nate'
data.age = 27

const userJson = JSON.stringify(data)
fs.writeFileSync('2-join.json', userJson)