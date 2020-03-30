//conexao com o banco de dados
const connection = require('../database/connection');

module.exports = {
    //listagem da tablela ongs
    async index(req,res){
        const endereco = await connection('endereco').select('*');

        return res.json(endereco);
    }
}