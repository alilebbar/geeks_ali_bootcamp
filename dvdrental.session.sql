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

