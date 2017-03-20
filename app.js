var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({extended: false})); // for parsing application/x-www-form-urlencoded

//Define a rota principal
app.get('/', function(req,res){
  res.send('Welcome to API');
});

//Lista de usuários
var users = [
  {id: 1, username: 'Manuel', email: 'manuel@example.com'},
  {id: 2, username: 'Maria', email: 'maria@example.com'}
];

//Define um endpoit de API
app.get('/api/get_users', function(req, res, next){
  res.send(users);
})

//Endpoint para envio temperatura
app.post('/temperatura/add', upload.array(), function(req, res){
  console.log(req.body.sensor);
  res.sendStatus(200);
})

app.listen(9000);
