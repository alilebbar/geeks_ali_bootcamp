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