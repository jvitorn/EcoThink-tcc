//conexao com o banco de dados
const connection = require('../database/connection');

module.exports = {
    //listagem da tabela endereco
    async index(req,res){
        const usuarioevento = await connection('usuarioevento').select('*');

        return res.json(usuarioevento);
    }
}