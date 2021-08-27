const chalk = require('chalk');
const { describe } = require('yargs');
const yargs = require('yargs')
const getNotes = require('./notes.js')
// const command = process.argv[2]

// Version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        // Title arg
        title: {
            describe: 'Note tile',
            demandOption: true,
            type: 'string'
        },
        // Add arg
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        console.log('Title: ' + argv.title + '\nBody: ' + argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function() {
        console.log('Remove a note')
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List notes',
    handler: function() {
        console.log('Listing notes')
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function() {
        console.log('Read a note')
    }
})


// Parse the arguments
yargs.parse()



// console.log(yargs.argv)

// console.log(process.argv)

// if (command === 'add') {
//     console.log('Adding Note')
// }
// else if (command === 'remove') {
//     console.log('Removing note!')
// }
