
-- CREATE DATABASE IF NOT EXISTS todo_database;

-- c\ into todo_database

CREATE TABLE todolist(
    key SERIAL PRIMARY KEY,
    id INT(30) NOT NULL,
    item VARCHAR(10000) NOT NULL
);
