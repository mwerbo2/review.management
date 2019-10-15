Drop Table IF EXISTS users CASCADE;

CREATE TABLE users (
user_id SERIAL PRIMARY KEY NOT NULL,
first_name TEXT NOT NULL,
last_name TEXT NOT NULL,
email VARCHAR NOT NULL,
password_digest BINARY(60) NOT NULl,
validated BOOLEAN
avatar VARCHAR,
);
