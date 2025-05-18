CREATE table product_orders(
    order_id serial primary key,
    user_id int
)
CREATE table items(
    item_id serial primary key,
    product_id int,
    order_id int,
    quantity int,
    foreign key(product_id) references products(product_id),
    foreign key(order_id) references product_orders(order_id)
);
create table products(
    product_id serial primary key,
    product_name varchar(100),
    product_price decimal(10, 2)
)

INSERT INTO products (product_name, product_price) VALUES
('Laptop', 1200.00),
('Smartphone', 800.00),
('Headphones', 150.00),
('Keyboard', 70.00);

INSERT INTO product_orders (user_id) VALUES
(1),
(2),
(3);

INSERT INTO items (product_id, order_id, quantity) VALUES
(1, 1, 2),
(2, 1, 1),
(3, 2, 3),
(4, 3, 1);

CREATE FUNCTION get_order_total(order_id INT) 
RETURNS DECIMAL(10, 2) AS $$
DECLARE
    total_price DECIMAL(10, 2);
BEGIN
    SELECT SUM(p.product_price * i.quantity)
    INTO total_price
    FROM items i 
    JOIN products p ON i.product_id = p.product_id
    WHERE i.order_id = get_order_total.order_id;

    RETURN total_price;
END;
$$ LANGUAGE plpgsql;


DROP FUNCTION IF EXISTS get_order_total(int);

SELECT get_order_total(1) as total_order_price;