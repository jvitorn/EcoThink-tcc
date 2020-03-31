// up -> responsavel pela criação de tablelas do knex 
exports.up = function(knex) {
  return knex.schema.createTable('evento',function(table){
    //criação de uma coluna com autoincremento que tenha um id
    table.increments();
    table.string('nome_evento').notNullable();
    table.datetime('data').notNullable();
    table.string('tipo').notNullable();
    table.string('descricao').notNullable();
    table.string('organizador').notNullable();
    table.string('img_evento').notNullable();
    //criando um relacionamento com a table 'evento'
    table.string('endereco_id').notNullable();
    //chamando chave estrangeira
    table.foreign('endereco_id').references('id').inTable('endereco');

  });
};
// down -> caso de algum problema
exports.down = function(knex) {
    return knex.schema.dropTable('evento');
};
