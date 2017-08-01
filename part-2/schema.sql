DROP DATABASE IF EXISTS grocery_store;
CREATE DATABASE grocery_store;

DROP TABLE IF EXISTS grocery_items;
DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS shoppers;

CREATE TABLE shoppers ( 
    shopper_id integer PRIMARY KEY,
    shopper_name varchar(255) NOT NULL,
    order_id integer REFERENCES orders (id),
);

CREATE TABLE orders (
    id integer PRIMARY KEY,
    shopper_id varchar(255) REFERENCES shoppers (shopper_id),
    total_cost decimal(12,2),
    
);

CREATE TABLE grocery_items (
    id integer PRIMARY KEY,
    name varchar(255) NOT NULL,
    price decimal(12,2),
    section varchar(255) NOT NULL
    
);


