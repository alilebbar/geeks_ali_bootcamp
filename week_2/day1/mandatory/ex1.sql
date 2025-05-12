create table Items (
Item_id serial primary key,
Name VARCHAR(100) not null,
Price INT not null
);

create table customers (
customers_id serial primary key,
first_name VARCHAR(100) not null,
last_name VARCHAR(100) not null
);

insert into Items(Name,Price)
values
('Petit bureau',100),
('Grand bureau',300),
('ventilateur',80);

insert into customers (first_name,last_name)
values
('Greg','Jones'),
('Sandra','Jones'),
('Scott','Scott'),
('Trevor','Green'),
('Melanie','Johnson');

select * from items;
select * from items where price > 80;
select * from items where price <= 300;
select * from customers where last_name = 'Smith';
/*le resultat est un tableau vide*/
select * from customers where last_name = 'Jones';
select * from customers where first_name != 'Scott';




