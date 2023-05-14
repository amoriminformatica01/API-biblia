import { createConnection } from 'mysql';
var connection = createConnection({
    host: 'localhost',
    user: 'root',
    password: '@Asj20508',
    database: 'biblia'
});

connection.connect();

export default connection