/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("usuario", (table) => {
        table.increments("idUsuario").primary();
        table.string("nome", 100).notNullable();
        table.string("telefone", 12).notNullable();
        table.string("email", 100).notNullable();
        table.string("senha", 255).notNullable();
        table.string("confirma", 255).notNullable();


    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists("usuario");
};

