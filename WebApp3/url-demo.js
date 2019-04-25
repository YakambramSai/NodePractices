var url = require('url');
var adr='http://localhost:8888/user?fname=Sachin&lname=Tendulkar';
var q = url.parse(adr, true);
console.log("host:"+q.host);
console.log("pathname:"+q.pathname);
console.log("search: "+q.search);
var qdata = q.query;
console.log(qdata.fname);
console.log(qdata.lname);