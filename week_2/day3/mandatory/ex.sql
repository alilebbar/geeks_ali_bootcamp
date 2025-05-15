SELECT name FROM language ;

SELECT f.title, f.description, l.name from film f 
inner JOIN language l on l.language_id = f.language_id;

SELECT f.title, f.description, l.name from language l 
LEFT JOIN film f on l.language_id = f.language_id;


create table new_film(
    film_id serial primary key,
    name varchar(50) not null
);

insert into new_film (name) values ('Harry Potter');
insert into new_film (name) values ('Star Wars');
insert into new_film (name) values ('La Ballena Segena');

CREATE table IF NOT EXISTS customer_review(
    review_id serial primary key,
    film_id int not null ,
    language_id int not null,
    title varchar(100) not null,
    score smallint not null,
    review text not null,
    updated_at date not null default current_date,
    FOREIGN KEY (film_id) references new_film(film_id) on delete cascade
);

INSERT INTO customer_review (film_id, language_id, title, score, review)
VALUES (1, 1, 'Harry Potter', 5, 'C est un bon film');  
INSERT INTO customer_review (film_id, language_id, title, score, review)
VALUES (2, 1, 'Star Wars', 4, 'C est un bon film');

delete from new_film where name = 'Harry Potter';

SELECT * from new_film;
SELECT * from customer_review;

/*le rivew de Harry Potter est supprimé car le film a été supprimé de la table new_film

/* exercice 2*/

SELECT * FROM language;
SELECT * FROM film;

UPDATE film
SET language_id = 2
WHERE film_id = 133;
UPDATE film
SET language_id = 3
WHERE film_id in (184,8,4,6);

select * from customer;

/*
store_id → référence la table store.

address_id → référence la table address.

Lorsqu'on fait un INSERT dans la table customer, les valeurs utilisées pour store_id et address_id doivent déjà exister dans leurs tables respectives (store et address).

Sinon, la base de données rejettera l'insertion avec une erreur de violation de clé étrangère (foreign key constraint violation).

Autrement dit, on ne peut pas ajouter un client sans lui attribuer une adresse valide et un magasin valide déjà existants.
*/

DROP TABLE IF EXISTS customer_review;

/* supprimez la table customer_review est facile car elle ne depand de aucune autre table */

SELECT COUNT(*) 
FROM rental 
WHERE return_date IS NULL;

/*183 rental n'ont pas encore été retournés*/

SELECT f.title, f.rental_rate
FROM rental r
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
WHERE r.return_date IS NULL
ORDER BY f.rental_rate DESC
LIMIT 30;

SELECT f.title, a.first_name
FROM film f
JOIN film_actor fa ON f.film_id = fa.film_id
JOIN actor a ON fa.actor_id = a.actor_id
WHERE a.first_name = 'Penelope'
  AND a.last_name = 'Monroe'
  AND (lower(f.title) LIKE '%sumo wrestler%' or lower(f.description) LIKE '%sumo wrestler%')
  /*le filme est park citizen*/

SELECT title, length, rating
FROM film
WHERE length < 60
  AND rating = 'R';

SELECT f.title, p.amount, r.return_date
FROM customer c
JOIN rental r ON c.customer_id = r.customer_id
JOIN payment p ON p.rental_id = r.rental_id
JOIN inventory i ON i.inventory_id = r.inventory_id
JOIN film f ON f.film_id = i.film_id
WHERE c.first_name = 'Matthew'
  AND c.last_name = 'Mahan'
  AND p.amount > 4.00
  AND r.return_date BETWEEN '2005-07-28' AND '2005-08-01';

SELECT f.title, f.description, f.replacement_cost
FROM customer c
JOIN rental r ON c.customer_id = r.customer_id
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
WHERE c.first_name = 'Matthew'
  AND c.last_name = 'Mahan'
  AND (f.title ILIKE '%boat%' OR f.description ILIKE '%boat%')
ORDER BY f.replacement_cost DESC;
