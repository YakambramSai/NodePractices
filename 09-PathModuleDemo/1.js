var path = require("path");
console.log(path.resolve('foo/bar', '/tmp/file/../a/../subfile'));



var path = require("path");
//since after combine all parameters together it is not resoved toGMTString
//any absolute path , hence cwd will prepended to the path
console.log(path.resolve('foo/bar', 'tmp/file/../a/../subfile'));
console.log(path.resolve('/foo/bar', 'tmp/file/../a/../subfile'));
console.log(path.resolve('foo/bar',"demo","test", '/tmp/file/../a/../subfile'));



var path = require("path");
console.log(path.dirname('/foo/bar/baz/asdf/quux.html')) 
console.log(path.basename('/foo/bar/baz/asdf/quux.html', '.html'))
console.log(path.extname('index.html'))

