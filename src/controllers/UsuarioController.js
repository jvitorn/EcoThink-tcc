//geração de id 
const generateUniqueId = require('../utils/generateUniqueId');
//conexao com o banco de dados
const connection = require('../database/connection');

module.exports = {
    //listagem da tabela endereco
    async index(req,res){
        const usuarios = await connection('usuario').select('*');
        
        return res.json(usuarios);
    },
    async create(req,res){
        const { nome,email,senha,celular='(00)000000000',nivel='user',imagem='semimagem' } = req.body;
        
        //capturando id do endereco passado pelo cabecalho da aplicação
        const endereco_id = req.headers.adress;
        //criando ids aleatorios atraves do crýpto 
        const id = generateUniqueId();
        
        await connection('usuario').insert({
            id,
            nome,
            email,
            senha,
            celular,
            nivel,
            imagem,
            endereco_id
        }); 
        //retornando id gerado pelo cryto no banco de dados 
        return res.json({ id });
    }
}