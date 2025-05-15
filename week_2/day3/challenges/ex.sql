create table IF NOT EXISTS Customer (
    customer_id serial PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL
);
CREATE table IF NOT EXISTS Customer_profile (
    Customer_profile_id serial PRIMARY KEY,
    isLoggedIn BOOLEAN NOT NULL DEFAULT FALSE,
    customer_id INT NOT NULL,
    FOREIGN KEY (customer_id) REFERENCES Customer(customer_id)
);

INSERT INTO Customer (first_name,last_name)
values
('John','Doe'),
('Jerome','Lalu'),
('Lea','Rive');

INSERT into Customer_profile (isLoggedIn, customer_id)
values(TRUE,(select customer_id from Customer where first_name = 'John')),
       (FALSE,(select customer_id from Customer where first_name = 'Jerome'));


 

select c.first_name from Customer c
JOIN Customer_profile cp
on c.customer_id = cp.customer_id
where cp.isLoggedIn = TRUE;

SELECT c.first_name, c.last_name, cp.isLoggedIn
FROM Customer c 
LEFT JOIN Customer_profile cp on c.customer_id = cp.customer_id;

SELECT count(c.customer_id) as customer_count FROM customer c
JOIN customer_profile cp
on c.customer_id = cp.customer_id
where cp.isLoggedIn = TRUE;


CREATE TABLE IF NOT EXISTS Book(
    book_id serial PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    author VARCHAR(100) NOT NULL
)

INSERT INTO Book (title, author)
values
('Alice In Wonderland','Lewis Carroll'),
('Harry Potter and the Philosopher','J.K. Rowling'),
('To Kill a Mockingbird','Harper Lee');

CREATE TABLE IF NOT EXISTS Student(
    student_id serial PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE,
    age INT NOT NULL CHECK (age <15)
);


INSERT INTO Student (name, age)
values
('John', 12),
('Lera', 11),
('Patrick', 10),
('Bob', 14);

CREATE TABLE IF NOT EXISTS Library(
    PRIMARY KEY (book_fk_id, student_fk_id),
    book_fk_id INT NOT NULL,
    student_fk_id INT NOT NULL,
    borrowed_date DATE NOT NULL,
    FOREIGN KEY (book_fk_id) REFERENCES Book(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (student_fk_id) REFERENCES Student(student_id) ON DELETE CASCADE ON UPDATE CASCADE
);



INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date)
values
((select book_id from Book where title = 'Alice In Wonderland'), (select student_id from Student where name = 'John'), '2022-02-15'),
((select book_id from Book where title = 'To Kill a Mockingbird'), (select student_id from Student where name = 'Bob'), '2021-03-03'),
((select book_id from Book where title = 'Alice In Wonderland'), (select student_id from Student where name = 'Lera'), '2021-05-23'),
((select book_id from Book where title = 'Harry Potter and the Philosopher'), (select student_id from Student where name = 'Bob'), '2021-08-12');


SELECT * FROM library

select s.name, b.title
from library l
JOIN student s ON l.student_fk_id = s.student_id
JOIN book b ON l.book_fk_id = b.book_id;

select s.age
from library l
JOIN student s ON l.student_fk_id = s.student_id
JOIN book b ON l.book_fk_id = b.book_id
where b.title = 'Alice In Wonderland';

DELETE FROM student 
where student_id= 1
/* parceque on declarer la supression en cascade dans la table library
et donc tous les enregistrements de la table library qui contiennent l'id de l'etudiant 1 seront supprimés */
