var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;
var config={
    user: 'vijayreddy18399',
  host: 'http://db.imad.hasura-app.io',
  database: 'vijayreddy18399',
  password: process.env.password,
  port: 5432,
}

var app = express();
app.use(morgan('combined'));

var counter=0;

app.get('/counter', function (req, res) {
  counter=counter+1;
  res.send(counter,toString());
});
var pool=new Pool(config);
app.get('/test-db', function (req, res) {
 pool.query('SELECT * FROM test',function(err,result)
 {
     if(err){res.status(500),send(err,toString());
 } 
     
 }
 }
 
 
 
 
 );
 
     
 }
});







app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/article-one', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});
app.get('/one', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'one.html'));
});

app.get('/article-two',function(req,res){res.send('rey2')}) 
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
