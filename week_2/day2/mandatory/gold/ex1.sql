/* exercice 1*/
SELECT rating, COUNT(*) AS rating_count
FROM film
GROUP BY rating;

SELECT title FROM film
WHERE rating IN ('G', 'PG-13')
  AND length < 120
  AND rental_rate < 3.00
ORDER BY title ASC;


SELECT * FROM customer;

UPDATE customer
SET first_name = 'Ali', last_name = 'Lebbar', email = 'lbr.abdelali@gmail.com'
WHERE customer_id = 1;

UPDATE address
SET address = '2mars', district = 'mersultan'
WHERE address_id = 1;
/* exercice 2*/
select * FROM students

UPDATE students 
set birth_date = '1998-11-02'
WHERE last_name = 'Benichou'

UPDATE students
set last_name = 'Guez'
WHERE last_name = 'Grez'

Delete from students
WHERE last_name = 'Benichou' and first_name = 'Lea'

select count(*) as count 
from students;

select count(*) as count
from students
where birth_date > '2000-01-01';

ALTER TABLE students
ADD math_grade DECIMAL(4,2) DEFAULT 0.00;

UPDATE students
set math_grade = 90
WHERE id = 2 or id = 4

UPDATE students
set math_grade = 80
WHERE id = 1 ;

UPDATE students
set math_grade = 40
WHERE id = 6;

select count(*) from students
where math_grade > 83;

insert into students (first_name, last_name, birth_date, math_grade)
values ('Omer', 'Simpson', '1980-10-03', 70.00);

select last_name, first_name, count(math_grade) as total
from students
GROUP BY
last_name, first_name

select sum(math_grade) as total
from students

/* exercice 3*/

select * FROM customers;
SELECT * from items;

CREATE table IF NOT EXISTS purchases (
    id serial PRIMARY KEY,
    customer_id integer NOT NULL,
    item_id integer NOT NULL,
    quantity_purchased integer NOT NULL
)

insert into purchases (customer_id, item_id, quantity_purchased)
values 
((select customers_id from customers where last_name = 'Scott' and first_name = 'Scott'),(select item_id from items where name = 'ventilateur'), 1),
((select customers_id from customers where last_name = 'Johnson' and first_name = 'Melanie'),(select item_id from items where name = 'Grand bureau'), 10),
((select customers_id from customers where last_name = 'Jones' and first_name = 'Greg'),(select item_id from items where name = 'Petit bureau'), 2);


SELECT * FROM purchases;

SELECT * FROM customers c
JOIN purchases p ON c.customers_id = p.customer_id

select name from items i
JOIN purchases p ON i.item_id = p.item_id
WHERE customer_id = 1;

select c.first_name, c.last_name
from customers c
JOIN purchases p on c.customers_id = p.customer_id
JOIN items i on p.item_id = i.item_id
WHERE i.name = 'Grand bureau' AND i.name = 'Petit bureau';


SELECT c.first_name, c.last_name, i.name from customers c
JOIN purchases p on c.customers_id = p.customer_id
JOIN items i on p.item_id = i.item_id;

-- Tentative d'insertion avec item_id NULL
INSERT INTO purchases (customer_id, item_id, quantity_purchased)
VALUES (1, NULL, 5);

-- Explication :
-- Cette requête échouera car la colonne item_id est définie comme NOT NULL dans la création de la table purchases.
-- Donc, il n'est pas possible d'insérer une valeur NULL dans item_id.
-- Si item_id acceptait les valeurs NULL (c'est-à-dire sans la contrainte NOT NULL), l'insertion serait possible,
-- sauf si une contrainte d'intégrité référentielle (clé étrangère) était aussi définie sur item_id,
-- auquel cas le comportement dépendrait de la configuration de cette contrainte.

