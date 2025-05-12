select first_name,last_name,birth_date from students order by last_name ASC limit 4;

select first_name,last_name,birth_date from students order by birth_date DESC limit 1;

select first_name,last_name,birth_date from students offset 2 limit 3;