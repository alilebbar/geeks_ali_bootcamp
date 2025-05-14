SELECT * FROM customer;

SELECT (first_name || ' ' || last_name) AS full_name FROM customer;

SELECT create_date FROM customer GROUP BY create_date;

SELECT * FROM customer ORDER BY first_name DESC;

SELECT film_id, title, description, release_year, rental_rate FROM film ORDER BY rental_rate ASC;

select address, phone FROM address where district = 'Texas';

SELECT * FROM film where film_id in (15,150);

SELECT film_id, title, description, length, rental_rate FROM film WHERE title = 'Harry Potter';
/*mon film préféré c'est Harry Potter n'existe pas dans la base de donné */

SELECT film_id, title, description, length, rental_rate FROM film WHERE title like 'Ha%';

select * FROM film ORDER BY rental_rate ASC LIMIT 10;

select * FROM film ORDER BY rental_rate ASC FETCH FIRST 10 ROWS ONLY OFFSET 10;

select c.first_name,c.last_name,p.amount, p.payment_date FROM customer c 
INNER JOIN payment p on c.customer_id = p.customer_id
ORDER by c.customer_id;



SELECT f.*
FROM film f
LEFT JOIN inventory i ON f.film_id = i.film_id
WHERE i.film_id IS NULL;


select ci.city, c.country from city ci
inner JOIN country c on ci.country_id = c.country_id; 


select c.customer_id, c.first_name, c.last_name, p.amount, p.payment_date
from customer c
inner join payment p on c.customer_id = p.customer_id
ORDER by p.staff_id;