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
http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    if (req.method == 'GET' && req.url == '/') {
        res.writeHead(200, {
            'Content-Type': 'text/html',
        });
        fileSystem.createReadStream('./index.html').pipe(res);
    } else if (req.method == 'POST' && req.url == '/employee') {
        insertRecord(req, res);
    } else if (req.method == 'GET' && q.pathname == '/employee') {
        selectRecord(req, res, q);
       
    } else {
        res.end("<h1>None of the url was met!</h1>");
    }
}).listen(8888);

function insertRecord(req, res,q){
    var data = "";
    req.on("data", function (d) {
        data += d.toString();
    });
    req.on("end", function () {
        res.writeHead(200, {
            'Content-Type': 'text/html',
    });
    var obj = qs.parse(data)
    var insertRecord = 'INSERT INTO employee(id, first_name, last_name, location, department) VALUE(?,?, ?, ?)';
    pool.getConnection(function (err, connection) {
    connection.query(insertRecord, [ obj.firstName, obj.lastName, obj.location, obj.department], 
                                function (err, res) {
                                    if (err) throw err;
                                    else { console.log('A new employee has been added.');}
                                        });
                                        connection.release(); //release the connection
                                    });
                        res.end();
                });

};

function selectRecord(req, res,q){
    var qdata = q.query;
    res.writeHead(200, {
        'Content-Type': 'text/html',
    });
    var selectRecord = 'select * from employee where id=?';
    pool.getConnection(function (err, connection) {
        connection.query(selectRecord, [qdata.id], 
                        function (err, result) {
                         if (err) throw err;
                        else {
                            console.log('Select query result:' + JSON.stringify(result));
                            res.write("<h1>" + JSON.stringify(result) + "</h1>");
                            res.end();
                        }
        });
        connection.release(); //release the connection
    });

};
