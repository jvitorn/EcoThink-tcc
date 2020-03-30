//geração de id 
const generateUniqueId = require('../utils/generateUniqueId');
//conexao com o banco de dados
const connection = require('../database/connection');


module.exports = {
    //listagem da tabela endereco
    async index(req,res){
        const endereco = await connection('endereco').select('*');

        return res.json(endereco);
    },
    async create(req,res){
        //capturando no body    
        const { cep,cidade,uf,logradouro,numero } = req.body;
        //criando ids aleatorios atraves do crýpto 
        const id = generateUniqueId(); 
        await connection('endereco').insert({
            id,
            cep,
            cidade,
            uf,
            logradouro,
            numero
        })
        //retornando id gerado pelo cryto no banco de dados 
        return res.json({ id });
    }
} 