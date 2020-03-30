const express = require('express');
const EnderecoController = require('../controllers/EnderecoController');
const routes = express.Router();
//criar um novo endereco
routes.post('/endereco',EnderecoController.create);
//listar um novo endereco 
routes.get('/endereco',EnderecoController.index);
//-----------------------------------------------------------------------------------------------------------------------------------------------
//quando entrar na rota padrao sera iniciado o 'index.html'
routes.get('/',(req,res)=>{
    res.render('index.html');
});
//quando entrar na rota padrao sera iniciado o 'cadastro.html'
routes.get('/cadastro',(req,res)=>{
    res.render('cadastro.html');
});
routes.get('/login',(req,res)=>{
    res.render('login.html');
});
routes.get('/perfil',(req,res)=>{
    res.render('perfil.html');
});
routes.get('/home',(req,res)=>{
    res.render('home.html');
});
routes.post('/registrar',(req,res)=>{
    let email = req.body.email;
    let senha = req.body.password;
    let confirm = req.body.confirm;
   console.log(req.body);
});
routes.post('/entrar',(req,res)=>{
    let email = req.body.email;
    let senha = req.body.password;
    if(email == "joao.carvalho@gmail.com" && senha == "123"){
        res.render("perfil.html");
    }else{
        res.render("login.html");
    }
});

module.exports = routes;