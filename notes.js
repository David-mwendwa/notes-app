const fs = require('fs');

const getNotes = function (fileName) {
  return fs.readFileSync(fileName, 'utf-8');
}

module.exports = getNotes


