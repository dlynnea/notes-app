const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs')
const getNotes = require('./notes');

// create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log('Title ' + argv.title)
        console.log('Body ' + argv.body)
    }
})

// create a remove command
yargs.command({
    command: 'remove',
    describe: 'romve a note',
    handler: function () {
        console.log('removing a note')
    }
})

//create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler: function () {
        console.log('listing out all notes')
    }
})

//create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function () {
        console.log('Reading a note')
    }
})

yargs.parse()