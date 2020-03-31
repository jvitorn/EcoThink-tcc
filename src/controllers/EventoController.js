//conexao com o banco de dados
const connection = require('../database/connection');

module.exports = {
    //listagem da tabela endereco
    async index(req,res){
        const eventos = await connection('evento').select('*');

        return res.json(eventos);
    },
    async create(req,res){
        const { nome_evento,data,tipo,descricao,organizador,img_evento } = req.body;
         //capturando id do endereco passado pelo cabecalho da aplicação
         const endereco_id = req.headers.adress;
         
        const eventos = await connection('evento').insert({
            nome_evento,
            data,
            tipo,
            descricao,
            organizador,
            img_evento,
            endereco_id
        });

        return res.json(eventos);
    }
}