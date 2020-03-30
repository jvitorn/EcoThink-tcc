// up -> responsavel pela criação de tablelas do knex 
exports.up = function(knex) {
  return knex.schema.createTable('usuarioevento',function(table){
    //criação de uma coluna com autoincremento
    table.increments()
    //criando um relacionamento com a table 'ongs'
    table.string('usuario_id').notNullable();
    //criando um relacionamento com a table 'ongs'
    table.integer('evento_id').notNullable();
    //chamando chave estrangeira
    table.foreign('usuario_id').references('id').inTable('usuario');
    //chamando chave estrangeira
    table.foreign('evento_id').references('id').inTable('evento');
  });
};

exports.down = function(knex) {
    return knex.schema.dropTable('usuarioevento');
};
