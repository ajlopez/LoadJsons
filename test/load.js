
var lj = require('..');

exports['Load simple JSON'] = function (test) {
    process.chdir('test');
    var simple = lj.load('simple');
    
    test.ok(simple);
    test.equal(simple.title, 'Simple JSON');
    process.chdir('..');
}

exports['Load simple JSON from directory'] = function (test) {
    var simple = lj.load('test/simple3');
    
    test.ok(simple);
    test.equal(simple.title, 'Simple JSON');
}

exports['Load simple JSON with explicit extension'] = function (test) {
    process.chdir('test');
    var simple = lj.load('simple.json');
    
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

exports['Load composite JSON from directory'] = function (test) {
    var compose = lj.load('test/compose2');
    
    test.ok(compose);
    test.equal(compose.author, "ajlopez");
    test.ok(compose.project);
    test.equal(typeof compose.project, "object");
    test.equal(compose.project.title, 'Simple JSON');
}

exports['Load JSON with escape'] = function (test) {
    process.chdir('test');
    var compose = lj.load('escape');
    
    test.ok(compose);
    test.equal(compose.author, "ajlopez");
    test.equal(compose.project, "$simple");
    process.chdir('..');
}

exports['Load JSON with references in array'] = function (test) {
    process.chdir('test');
    var entities = lj.load('entities');
    
    test.ok(entities);
    test.ok(Array.isArray(entities.entities));
    test.equal(entities.entities.length, 2);
    test.equal(typeof entities.entities[0], 'object');
    test.equal(typeof entities.entities[1], 'object');
    test.equal(entities.entities[0].name, 'customer');
    test.equal(entities.entities[1].name, 'supplier');
    test.equal(entities.entities[0].title, 'Customer');
    test.equal(entities.entities[1].title, 'Supplier');

    process.chdir('..');
}