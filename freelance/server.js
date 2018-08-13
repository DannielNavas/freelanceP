const express = require('express');
const bodyParser = require('body-parser');
const mysql      = require('mysql');
//pool of conections
var pool        = mysql.createPool({
    connectionLimit : 100, // default = 10
    host            : 'localhost',
    user            : 'root',
    password        : '',
    database        : 'contractus'
});
// Initialize the app
const app = express()
app.use(bodyParser());  
app.use(bodyParser.json({limit:'5mb'}));   
app.use(bodyParser.urlencoded({extended:true})); 
//access cors  
app.use(function (req, res, next) {        
     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');    
     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');    
     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');      
     res.setHeader('Access-Control-Allow-Credentials', true);       
     next();  
 });


// part of users

//get login
app.get('/getUser/:email/:pass', function (req, res) {
	pool.getConnection(function (err, connection) {
	   connection.query('select * from users where email=? and pass=? ', [req.params.email, req.params.pass], function (err, rows) {
	    connection.release();	
	    if (err) throw err;
	    res.send(JSON.stringify(rows));
	  });
 });  
});
//get users
app.get('/getUsers', function (req, res) {
    pool.getConnection(function (err, connection) {
        connection.query("select * from users", function (err, rows) {
            connection.release();
            if (err) throw err;
            console.log(rows.length);
            res.send(JSON.stringify(rows));
        });
    });
});
//insert users
app.post('/createUsers', function (req, res) {
 pool.getConnection(function (err, connection) {	
    connection.query('INSERT INTO users SET ?', req.body, function (err, result) {
    		 connection.release();
            if (err) throw err;
            res.send('Usuario insertado  ID: ' + result.insertId);
        }
    );
   });
});
//update users
app.put('/updateUsers', function (req, res) {
 pool.getConnection(function (err, connection) {
   connection.query('UPDATE users SET email=?, pass=? where id=?', [req.body.email,req.body.pass, req.body.id], function (err, result) {
    connection.release();
     if (error) throw error;
      res.end(JSON.stringify(result));
     });
  });
});
//delete users
app.delete('/deleteUsers', function (req, res) {
  pool.getConnection(function (err, connection) {
    connection.query('DELETE FROM users WHERE id=?', [req.body.id], function (err, result) {
     connection.release();	
     if (error) throw error;
     res.end('usuario eliminado!');
   });
 });
});


//


// Start the server
app.listen(3000, () => {
 console.log('El backend se inicializa en http://localhost:3000/ ');
});