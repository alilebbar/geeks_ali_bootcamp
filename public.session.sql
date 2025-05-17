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




SELECT first_name, last_name
from customers
ORDER BY first_name ASC limit 2 offset (select count (*) from customers) - 2;


Delete from purchases
where customer_id = (select customers_id from customers where first_name = 'Scott' and last_name = 'Scott')


select * from customers
where last_name = 'Scott' and first_name = 'Scott';

/*oui le client existe toujours dans la table customers, mais il n'a plus d'achats associés dans la table purchases.*/


select c.last_name, c.first_name, i.name from customers c
RIGHT JOIN purchases p on c.customers_id = p.customer_id
RIGHT JOIN items i on p.item_id = i.item_id

select c.last_name, c.first_name, i.name from customers c
inner JOIN purchases p on c.customers_id = p.customer_id
inner JOIN items i on p.item_id = i.item_id





