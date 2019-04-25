
var mysql = require('mysql');
var pool =  mysql.createPool({
host : 'localhost',
user : 'root',
password: '',
database: 'test'
});
var selectRecord = 'select * from user';
pool.getConnection(function(err, connection){    
 
  //Insert a record.
  connection.query(selectRecord, function(err,res){
    if(err) throw err;
    else {
        console.log(res);
    }
  });
 
  connection.release();//release the connection
});