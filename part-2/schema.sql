DROP DATABASE IF EXISTS grocery_store;
CREATE DATABASE grocery_store;

DROP TABLE IF EXISTS grocery_items;
DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS shoppers;

\c grocery_store

CREATE TABLE grocery_items (
    id serial PRIMARY KEY,
    name varchar(255) NOT NULL,
    price decimal(12,2),
    section varchar(255) NOT NULL 
);

CREATE TABLE shoppers (
    shopper_id integer PRIMARY KEY,
    shopper_name varchar(255) NOT NULL,
    order_id integer NOT NULL
);
-- CREATE TABLE  ( 
-- )

CREATE TABLE orders (
    id integer PRIMARY KEY,
    shopper_id integer REFERENCES shoppers (shopper_id), 
    total_cost decimal(12,2)
);



