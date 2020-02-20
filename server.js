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

//definindo os arquivos da aplicação
app.use(express.static(path.join(__dirname,'src/public')));
//definindo onde estara as views
app.set('views',path.join(__dirname,'src/public'));
//renderizando para html
app.engine('html',require('ejs').renderFile);
//definindo a view 
app.set('view engine','html');

//-----------------------------------------------------------------------------------------------------------------------------------------------
//quando entrar na rota padrao sera iniciado o 'index.html'
app.use('/',(req,res)=>{
    res.render('index.html');
});
//quando entrar na rota padrao sera iniciado o 'cadastro.html'
app.use('/cadastro',(req,res)=>{
    res.render('cadastro.html');
});

app.listen(port,function(){
    console.log('Server is running at http://localhost:'+ port);
});