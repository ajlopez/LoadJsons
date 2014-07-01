
var path = require('path');

function load(name, dirname) {
    if (!dirname)
        dirname = '.';
        
    if (!hasExtension(name, 'json'))
        name += '.json';
        
    var filename = path.resolve(path.join(dirname, name));
    
    var json = require(filename);
    
    return expandValue(json, path.dirname(filename));
}

function hasExtension(name, ext) {
    var ends = '.' + ext;
    
    if (name.length < ends.length)
        return false;
        
    return name.substring(name.length - ends.length) == ends;
}

function expand(json, dirname) {
    for (var n in json)
        json[n] = expandValue(json[n], dirname);
}

function expandValue(value, dirname) {
    if (typeof value == 'string') {
        if (value[0] == '$')
            return load(value.substring(1), dirname);
        
        if (value[0] == '\\' && value[1] == '$')
            return value.substring(1);
    }
    else if (Array.isArray(value) || typeof value == 'object') {
        for (var n in value)
            value[n] = expandValue(value[n], dirname);
    }
    
    return value;
}

module.exports = {
    load: load
}