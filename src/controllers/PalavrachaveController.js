//conexao com o banco de dados
const connection = require('../database/connection');

module.exports = {
    //listagem da tabela palavras chave
    async index(req,res){
        const palavraschave = await connection('palavrachave').select('*');

        return res.json(palavraschave);
    }
}