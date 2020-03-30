//definindo porta do servidor
const port = 3000;
//criando express
const express = require('express');
//criando path
const path = require('path');
//criando app
const app = express();
//criando protocolo wss
const server = require('http').createServer(app);
//capturando usuarios
const users = [];
//capturanndo rotas
const routes = require('./src/routes');
//definindo os arquivos da aplicação
app.use(express.static(path.join(__dirname,'src/public')));
//definindo onde estara as views
app.set('views',path.join(__dirname,'src/views'));
//renderizando para html
app.engine('html',require('ejs').renderFile);
//definindo a view 
app.set('view engine','html');
//encode
app.use(express.urlencoded());
//chamando rotas
app.use(routes);
//Servidor 
app.listen(port,function(){
    console.log('Server is running at http://localhost:'+ port);
});