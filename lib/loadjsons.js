
var path = require('path');

function load(name) {
    var filename = path.resolve(path.join('.', name + '.json'));
    return require(filename);
}

module.exports = {
    load: load
}