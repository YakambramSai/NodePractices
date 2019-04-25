
var mysql = require('mysql');
var pool =  mysql.createPool({
host : 'localhost',
user : 'root',
password: '',
database: 'test'
});
var createTable = "CREATE TABLE person(id int(11) NOT NULL AUTO_INCREMENT,"+
    "fname varchar(20) DEFAULT NULL,"+
    "lname varchar(20) DEFAULT NULL,"+
    "PRIMARY KEY (id)) ";
 
pool.getConnection(function(err, connection){    
  //Create a table called employee
  if(err) throw err;
  connection.query(createTable,  function(err){
    if(err) throw err;
    else {
        console.log('Table created!');
    }
     connection.release();//release the connection
        process.exit();
  });