
-- CREATE DATABASE IF NOT EXISTS todo_database;

--c\ into todo_database

CREATE TABLE todolist(
    id SERIAL PRIMARY KEY,
    item VARCHAR(10000) NOT NULL
);
