const validator = require('validator')
const getNotes = require('./notes')

console.log(getNotes('notes.txt'))
console.log(validator.isURL('www.techdave.com'))
