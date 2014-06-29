
var lj = require('..');

exports['Load simple JSON'] = function (test) {
    process.chdir('test');
    var simple = lj.load('simple');
    
    test.ok(simple);
    test.equal(simple.title, 'Simple JSON');
    process.chdir('..');
}

exports['Load composite JSON'] = function (test) {
    process.chdir('test');
    var compose = lj.load('compose');
    
    test.ok(compose);
    test.equal(compose.author, "ajlopez");
    test.ok(compose.project);
    test.equal(typeof compose.project, "object");
    test.equal(compose.project.title, 'Simple JSON');
    process.chdir('..');
}