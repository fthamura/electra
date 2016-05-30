document.write('The current version of process ' + process.version)

var fs = require('fs')

var contents = fs.readFileSync('./package.json', 'utf8')
alert(contents)
