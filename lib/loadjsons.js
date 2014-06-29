
var path = require('path');

function load(name, dirname) {
    if (!dirname)
        dirname = '.';
        
    var filename = path.resolve(path.join(dirname, name + '.json'));
    
    var json = require(filename);
    
    expand(json, dirname);
    
    return json;
}

function expand(json, dirname) {
    for (var n in json) {
        var value = json[n];
        
        if (typeof value == 'string' && value[0] == '$')
            json[n] = load(value.substring(1), dirname);
    }
}

module.exports = {
    load: load
}