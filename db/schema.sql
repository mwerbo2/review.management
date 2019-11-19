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


CREATE TABLE reviews
(
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    user_id int,
    building_id INT,
    date_comment TIMESTAMP,
    review VARCHAR,
    thumbs_up INT,
    thumbs_down INT,
    comments JSON,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (building_id) REFERENCES buildings(id),
)