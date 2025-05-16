CREATE TABLE IF NOT EXISTS Menu_Items (
    item_id SERIAL PRIMARY KEY,
    item_name VARCHAR(30) NOT NULL,
    item_price smallint DEFAULT 0
);

delete from Menu_Items where item_id = 2;
delete from Menu_Items where item_id = 3;

INSERT INTO Menu_Items (item_name, item_price) VALUES
('Cheeseburger', 5),
('Veggie Burger', 4),
('Chicken Sandwich', 6),
('French Fries', 2),
('Salad', 3),
('Soda', 1),
('Water', 0);

SELECT * FROM Menu_Items;