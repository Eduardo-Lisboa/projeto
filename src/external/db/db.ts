import dotenv from 'dotenv';
dotenv.config(); // Carrega as variáveis do arquivo .env
import pgPromise from 'pg-promise';

const pgp = pgPromise();

const dbConfig = {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
};

console.log("DB_HOST:", process.env.DB_HOST);
console.log("DB_USER:", process.env.DB_USER);
console.log("DB_PASSWORD:", process.env.DB_PASSWORD);

export const db = pgp(dbConfig);
