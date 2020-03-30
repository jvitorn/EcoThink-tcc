// up -> responsavel pela criação de tablelas do knex 
exports.up = function(knex) {
  return knex.schema.createTable('usuario',function(table){
      //criação de uma coluna string 'id' e definindo como chave primaria
      table.string('id').primary();
      table.string('nome').notNullable();
      table.string('email').notNullable();
      table.string('senha').notNullable();
      table.string('celular').notNullable();
      table.string('nivel').notNullable();
      table.string('imagem').notNullable();
      //criando um relacionamento com a table 'endereco'
      table.string('endereco_id').notNullable();
       //chamando chave estrangeira
       table.foreign('endereco_id').references('id').inTable('endereco');

  });
};
// down -> caso de algum problema
exports.down = function(knex) {
    return knex.schema.dropTable('usuario');
};
