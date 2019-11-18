Drop Table IF EXISTS users
CASCADE;

CREATE TABLE users
(
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email VARCHAR(255) NOT NULL,
    password_digest BINARY(60) NOT NULL,
    validated BOOLEAN,
    avatar VARCHAR(255)
);