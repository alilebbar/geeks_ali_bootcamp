create table students(
id serial primary key, 
last_name VARCHAR(100) not null,
first_name VARCHAR(100) not null,
birth_date date not null
);
INSERT INTO students (first_name, last_name, birth_date)
VALUES 
('Marc', 'Benichou', '1998-11-02'),
('Yoan', 'Cohen', '2010-12-03'),
('Lea', 'Benichou', '1987-07-27'),
('Amelia', 'Dux', '1996-04-07'),
('David', 'Grez', '2003-06-14'),
('Omer', 'Simpson', '1980-10-03'),
('abdelali','lebbar','1994-10-01');

select * from students;

select first_name,last_name from students;

select first_name,last_name from students where id=2;

select first_name,last_name from students where last_name='Benichou' and first_name='Marc';

select first_name,last_name from students where last_name='Benichou' or first_name='Marc';

select first_name,last_name from students where first_name like '%a%';

select first_name,last_name from students where first_name like 'a%'

select first_name,last_name from students where first_name like '%a'

select first_name,last_name from students where first_name like '%a_'

select first_name,last_name from students where id=1 or id=3;

select * from students where birth_date>='1/01/2000'






