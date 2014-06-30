
var path = require('path');

function load(name, dirname) {
    if (!dirname)
        dirname = '.';
        
    if (!hasExtension(name, 'json'))
        name += '.json';
        
    var filename = path.resolve(path.join(dirname, name));
    
    var json = require(filename);
    
    expand(json, path.dirname(filename));
    
    return json;
}

function hasExtension(name, ext) {
    var ends = '.' + ext;
    
    if (name.length < ends.length)
        return false;
        
    return name.substring(name.length - ends.length) == ends;
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