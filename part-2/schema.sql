DROP TABLE IF EXISTS grocery_store;

CREATE TABLE grocery_store (
    id serial,
    name varchar(255) NOT NULL,
    price decimal(12,2),
    section varchar(255) NOT NULL
    
);


