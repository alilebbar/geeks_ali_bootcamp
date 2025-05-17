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