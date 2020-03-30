//conexao com o banco de dados
const connection = require('../database/connection');

module.exports = {
    //listagem da tabela endereco
    async index(req,res){
        const fotos = await connection('foto').select('*');

        return res.json(fotos);
    }
}