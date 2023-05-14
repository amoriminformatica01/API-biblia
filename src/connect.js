import { createConnection } from 'mysql';
import dotenv from 'dotenv';

// Configura as variáveis de ambiente
dotenv.config();

// Cria a conexão com o banco de dados
const connection = createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

connection.connect();

export default connection;