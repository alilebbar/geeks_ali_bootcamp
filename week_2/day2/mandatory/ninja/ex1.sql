
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





