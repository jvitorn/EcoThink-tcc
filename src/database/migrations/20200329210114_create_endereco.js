// up -> responsavel pela criação de tablelas do knex 
exports.up = function(knex) {
  return knex.schema.createTable('endereco',function(table){
     //criação de uma coluna string 'id' e definindo como chave primaria
     table.string('id').primary();
    //criação de uma coluna string 'cep' onde valor nao pode ser null
    table.string('cep').notNullable();
    table.string('cidade').notNullable();
    table.string('uf').notNullable();
    table.string('logradouro').notNullable();
    table.string('rua').notNullable();
    table.integer('numero').notNullable();

  });
};
// down -> caso de algum problema
exports.down = function(knex) {
  return knex.schema.dropTable('endereco');
};
