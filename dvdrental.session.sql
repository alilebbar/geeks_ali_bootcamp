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



/*day 3 */

SELECT f.title
FROM rental r
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
WHERE r.return_date IS NULL;

SELECT c.first_name, c.last_name, f.title
FROM rental r
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
JOIN customer c ON r.customer_id = c.customer_id
WHERE r.return_date IS NULL
GROUP BY c.first_name, c.last_name, f.title



SELECT f.title
FROM film f
JOIN film_category fc ON f.film_id = fc.film_id
JOIN category c ON fc.category_id = c.category_id
JOIN film_actor fa ON f.film_id = fa.film_id
JOIN actor a ON fa.actor_id = a.actor_id
WHERE c.name = 'Action' AND a.first_name = 'Joe' AND a.last_name = 'Swank';

SELECT s.store_id, c.city, co.country
FROM store s
JOIN address a ON s.address_id = a.address_id
JOIN city c ON a.city_id = c.city_id
JOIN country co ON c.country_id = co.country_id;


SELECT s.store_id, SUM(f.length) AS total_minutes
FROM store s
JOIN inventory i ON s.store_id = i.store_id
JOIN film f ON i.film_id = f.film_id
JOIN rental r ON i.inventory_id = r.inventory_id
WHERE r.return_date IS NOT NULL
GROUP BY s.store_id;

/*ninja*/

SELECT f.title
FROM film f
JOIN inventory i ON f.film_id = i.film_id
LEFT JOIN rental r ON i.inventory_id = r.inventory_id AND r.return_date IS NULL
WHERE f.rating IN ('G', 'PG') AND r.rental_id IS NULL;

CREATE TABLE IF not EXISTS kids_waitlist (
    waitlist_id SERIAL PRIMARY KEY,
    child_name VARCHAR(100) NOT NULL,
    film_id INT REFERENCES film(film_id),
    request_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

SELECT f.title, COUNT(k.waitlist_id) AS number_waiting
FROM kids_waitlist k
JOIN film f ON k.film_id = f.film_id
GROUP BY f.title
ORDER BY number_waiting DESC;

INSERT INTO kids_waitlist (child_name, film_id)
VALUES ('Amine', 5), ('Lina', 5), ('Yassine', 7);

