// up -> responsavel pela criação de tablelas do knex 
exports.up = function(knex) {
  return knex.schema.createTable('foto',function(table){
     //criação de uma coluna com autoincremento
     table.increments();
     table.string('foto');
     //criando um relacionamento com a table 'usuario'
    table.string('usuario_id').notNullable();
    //criando um relacionamento com a table 'evento'
    table.integer('evento_id').notNullable();
    //chamando chave estrangeira
    table.foreign('usuario_id').references('id').inTable('usuario');
    //chamando chave estrangeira
    table.foreign('evento_id').references('id').inTable('evento');
  });
};
// down -> caso de algum problema
exports.down = function(knex) {
    return knex.schema.dropTable('foto');
};
