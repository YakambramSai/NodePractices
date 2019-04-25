
var mysql = require('mysql');
var pool =  mysql.createPool({
host : 'localhost',
user : 'root',
password: '',
database: 'test'
});
var insertRecord = 'INSERT INTO user(fname,lname) VALUE(?,?)';
pool.getConnection(function(err, connection){    
 
  //Insert a record.
  connection.query(insertRecord,['Joe',"Martin"], function(err,res){
    if(err) throw err;
    else {
        console.log('A new employee has been added.');
    }
  });
 
  connection.release();//release the connection
  
});