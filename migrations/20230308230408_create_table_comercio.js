/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("comercio", (table) => {
        table.increments("idComercio").primary();
        table.integer("idUsuario").unsigned();
        table.foreign("idUsuario").references("usuario.idUsuario");
        table.string("nome",100).notNullable;
        table.string("telefone",12);
        table.string("cnpj",14).notNullable;
        table.string("cpf",20).notNullable;
        table.string("rg",20).notNullable;
        table.string("endereco",100);
        
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists("comercio");
};

