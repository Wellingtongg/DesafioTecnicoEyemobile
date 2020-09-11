import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('transactions', function(table) {
    table.string('id').primary();
    table.string('nsu').notNullable();
    table.decimal('valor', 10, 2).notNullable();
    table.decimal('liquido', 10, 2).notNullable();
    table.string('bandeira').notNullable();
    table.string('modalidade').notNullable();
    table.dateTime('horario').notNullable();
    table.date('disponivel').notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('transactions');
}

