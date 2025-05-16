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

