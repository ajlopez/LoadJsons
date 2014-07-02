# LoadJsons

Load JSON from multiple files

## Installation

Via npm on Node:

```
npm install loadjsons
```

## Usage

Reference in your program:

```js
var lj = require('loadjsons');

// Load project.json from current directory
var json = lj.load('project');
```

The elements of the JSON file to load can be strings with reference to other JSON files, relative to the parent
file being loaded. The reference starts with `$`.

Example. Parent file:
```json
{
    "project": "$simple",
    "author": "adam"
}
```

`simple.json` in the same directory:
```json
{
    "title": "Simple JSON"
}
```

Result:
```json
{
    "project": {
        "title": "Simple JSON"
    },
    "author": "adam"
}
```

To escape the initial `$` use `\`:
```json
{
    "project": "\\$simple",
    "author": "adam"
}
```


## To Do

TBD

## Development

```
git clone git://github.com/ajlopez/LoadJsons.git
cd LoadJsons
npm install
npm test
```

## Samples

TBD

## Versions

0.0.1 Published

## License

MIT

## Contribution

Feel free to [file issues](https://github.com/ajlopez/LoadJsons) and submit
[pull requests](https://github.com/ajlopez/LoadJsons/pulls) — contributions are
welcome<

If you submit a pull request, please be sure to add or update corresponding
test cases, and ensure that `npm test` continues to pass.

