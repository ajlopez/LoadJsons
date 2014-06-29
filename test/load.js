
var lj = require('..');

exports['Load simple JSON'] = function (test) {
    process.chdir('test');
    var simple = lj.load('simple');
    
    test.ok(simple);
    test.equal(simple.title, 'Simple JSON');
    process.chdir('..');
}