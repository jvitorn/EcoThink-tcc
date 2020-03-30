//conexao com o banco de dados
const connection = require('../database/connection');

module.exports = {
    //listagem da tabela endereco
    async index(req,res){
        const usuarios = await connection('usuario').select('*');

        return res.json(usuarios);
    }
}