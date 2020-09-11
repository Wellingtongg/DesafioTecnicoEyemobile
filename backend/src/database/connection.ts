import knex from 'knex';
import knexConfiguration from './../../knexfile';

const connection = knex(knexConfiguration);

export default connection;