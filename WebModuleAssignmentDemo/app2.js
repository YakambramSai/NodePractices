var http = require('http');
var fileSystem = require('fs');
var qs = require('querystring');
var mysql = require('mysql');
var url = require('url');
var pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test'
});
http.createServer(async function (req, res) {
    var q = url.parse(req.url, true);
    if (req.method == 'GET' && req.url == '/') {
        res.writeHead(200, {
            'Content-Type': 'text/html',
        });
        fileSystem.createReadStream('./index.html').pipe(res);
    } else if (req.method == 'POST' && req.url == '/employee') {
        await insertRecord(req, res,q);
    } else if (req.method == 'GET' && q.pathname == '/employee') {
      await  selectRecord(req, res, q);   
    } else {
        res.end("<h1>None of the url was met!</h1>");
    }
}).listen(8888);

 async function insertRecord(req, res,q){
    var data = "";
    req.on("data", function (d) {
        data += d.toString();
    });
    req.on("end", async function () {
        res.writeHead(200, {
            'Content-Type': 'text/html',
    });
  
    var obj = qs.parse(data);
    var insertRecord = 'INSERT INTO employee(id, first_name, last_name, location, department) VALUE(?,?,?, ?, ?)';
    var param=[1, obj.firstName, obj.lastName, obj.location, obj.department];
    var result=await connection(insertRecord,param);
    res.write("<h1>" + JSON.stringify(result) + "</h1>");
    res.end();
   });
};

 async function selectRecord(req, res,q){
    var qdata = q.query;
    res.writeHead(200, {
        'Content-Type': 'text/html',
    });
    var selectRecord = 'select * from employee where id=?';
    var param =[qdata.id];
    var result= await connection(selectRecord,param);
    res.write("<h1>" + JSON.stringify(result) + "</h1>");
    res.end();

};

async function connection(query, param){
  return  pool.getConnection(function (err, connection) {
        connection.query(query, param, 
                        function (err, result) {
                         if (err) throw err;
                        else {
                            console.log('Query result:' + JSON.stringify(result));
                            return result;
                        }
        });
        connection.release();
        //release the connection
    });   
};
















//sv.shashankvats@gmail.com