//conexao com o banco de dados
const connection = require('../database/connection');

module.exports = {
    //listagem da tabela endereco
    async index(req,res){
        const eventos = await connection('evento').select('*');

        return res.json(eventos);
    }
}