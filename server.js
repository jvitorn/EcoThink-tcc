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
app.set('views',path.join(__dirname,'src/views'));
//renderizando para html
app.engine('html',require('ejs').renderFile);
//definindo a view 
app.set('view engine','html');
//encode
app.use(express.urlencoded());


//-----------------------------------------------------------------------------------------------------------------------------------------------
//quando entrar na rota padrao sera iniciado o 'index.html'
app.get('/',(req,res)=>{
    res.render('index.html');
});
//quando entrar na rota padrao sera iniciado o 'cadastro.html'
app.get('/cadastro',(req,res)=>{
    res.render('cadastro.html');
});
app.post('/registrar',(req,res)=>{
    let email = req.body.email;
    let senha = req.body.password;
    let confirm = req.body.confirm;
    if(senha === confirm){
        console.log('senhas corretas');
    }else{
        console.log('senhas incorretas');
    }
});
//Servidor 
app.listen(port,function(){
    console.log('Server is running at http://localhost:'+ port);
});