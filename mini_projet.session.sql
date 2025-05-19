CREATE table IF NOT EXISTS person(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL 
) ;
CREATE table IF NOT EXISTS profile_person(
    id SERIAL PRIMARY KEY,
    person_id INT NOT NULL,
    username VARCHAR(100) NOT NULL,
    FOREIGN KEY (person_id) REFERENCES person(id) ON DELETE CASCADE on UPDATE CASCADE
);

INSERT into person (first_name, last_name) values 
('John', 'Doe'),
('Jane', 'Smith'),
('Alice', 'Johnson'),
('Bob', 'Brown');

INSERT INTO profile_person (person_id, username) VALUES 
(1, 'johndoe'),
(2, 'janesmith'),
(3, 'alicejohnson'),
(4, 'bobbrown');

SELECT * FROM person;
SELECT * FROM profile_person;

CREATE TABLE IF NOT EXISTS user_profil (
    id SERIAL PRIMARY KEY,
    user_name VARCHAR(100) NOT NULL,
    password BYTEA NOT NULL
);
ALTER TABLE user_profil
ALTER COLUMN password TYPE BYTEA;

SELECT * FROM user_profil
DROP TABLE IF EXISTS user_profil;
INSERT INTO user_profil(user_name,password) VALUES 
('admin','admin'),
('user1','password1'),
('user2','password2'),
('user3','password3');