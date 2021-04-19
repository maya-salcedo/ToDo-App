const Pool = require("pg").Pool;
//can set configuration for what we can connect the database

const pool = new Pool({
    user: "postgres",
    password: "postgres",
    database: "todo_database",
    host: "localhost",
    port: 5432,
    
});

module.exports = pool; 