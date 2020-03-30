const connection = require('../database/connection');

module.exports = {
    async create(req,res){
        const { id } = req.body;
        const usuario = await connection('usuario')
        .where('id',id)
        .select('nome')
        .first();
        //caso nao exista esta ong com este ID ira retornar um ERROR 
        if(!usuario){
            return res.status(400).json({error:'No USER Found with this ID'});
        }
        return res.json(usuario);
    }
}