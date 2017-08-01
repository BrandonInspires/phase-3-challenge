-- COPY grocery_items (name, price, section) FROM '/Users/vagabonding.io/Github/phase-3-challenge/part-2/grocery.csv' DELIMITER ',' CSV;
\c grocery_store



INSERT INTO shoppers (shopper_id, shopper_name, order_id) VALUES (1, 'Karola Maskrey', 5);
INSERT INTO shoppers (shopper_id, shopper_name, order_id) VALUES (2, 'Malissia Tipling', 3);
INSERT INTO shoppers (shopper_id, shopper_name, order_id) VALUES (3, 'Elijah Lawie', 7);
INSERT INTO shoppers (shopper_id, shopper_name, order_id) VALUES (4, 'Alexandre Sydney', 9);
INSERT INTO shoppers (shopper_id, shopper_name, order_id) VALUES (5, 'Wendy Kuhnt', 4);
INSERT INTO shoppers (shopper_id, shopper_name, order_id) VALUES (6, 'Josselyn Middleweek', 1);
INSERT INTO shoppers (shopper_id, shopper_name, order_id) VALUES (7, 'Maisie Berzen', 8);
INSERT INTO shoppers (shopper_id, shopper_name, order_id) VALUES (8, 'Sherline Cicchillo', 1);
INSERT INTO shoppers (shopper_id, shopper_name, order_id) VALUES (9, 'Jada Colliber', 1);
INSERT INTO shoppers (shopper_id, shopper_name, order_id) VALUES (10, 'Jerry Washington', 4);
	
INSERT INTO grocery_items (name, price, section) VALUES ('Aluminum Foil',8.84,'miscellaneous');
INSERT INTO grocery_items (name, price, section) VALUES ('Apples',10.81,'produce');
INSERT INTO grocery_items (name, price, section) VALUES ('Bacon',9.01,'meat');
INSERT INTO grocery_items (name, price, section) VALUES ('Bagles',10.67,'bread');
INSERT INTO grocery_items (name, price, section) VALUES ('Baguette /French Bread',5.01,'bread');
INSERT INTO grocery_items (name, price, section) VALUES ('Barbeque Sauce',16.96,'packaged');
INSERT INTO grocery_items (name, price, section) VALUES ('Butter',4.29,'dairy');
INSERT INTO grocery_items (name, price, section) VALUES ('Carrots',2.88,'produce');
INSERT INTO grocery_items (name, price, section) VALUES ('Cheese',1.75,'dairy');
INSERT INTO grocery_items (name, price, section) VALUES ('Coffee',6.17,'packaged');
INSERT INTO grocery_items (name, price, section) VALUES ('Cold Cuts',1.47,'deli');
INSERT INTO grocery_items (name, price, section) VALUES ('Cream Cheese',16.11,'dairy');
INSERT INTO grocery_items (name, price, section) VALUES ('Croissants',6.36,'bread');
INSERT INTO grocery_items (name, price, section) VALUES ('Eggs',2.66,'dairy');
INSERT INTO grocery_items (name, price, section) VALUES ('Fish',0.49,'meat');
INSERT INTO grocery_items (name, price, section) VALUES ('Flour',8.74,'bulk');
INSERT INTO grocery_items (name, price, section) VALUES ('Fruit',8.87,'produce');
INSERT INTO grocery_items (name, price, section) VALUES ('Grapes',8.78,'produce');
INSERT INTO grocery_items (name, price, section) VALUES ('Green Beans',7.86,'produce');
INSERT INTO grocery_items (name, price, section) VALUES ('Ground Beef',16.03,'meat');
INSERT INTO grocery_items (name, price, section) VALUES ('Ham',13.27,'meat');
INSERT INTO grocery_items (name, price, section) VALUES ('Honey',9.31,'packaged');
INSERT INTO grocery_items (name, price, section) VALUES ('Ice Cream',14.08,'frozen');
INSERT INTO grocery_items (name, price, section) VALUES ('Ketchup',2.94,'packaged');
INSERT INTO grocery_items (name, price, section) VALUES ('Lemons',17.24,'produce');
INSERT INTO grocery_items (name, price, section) VALUES ('Lettuce',16.28,'produce');
INSERT INTO grocery_items (name, price, section) VALUES ('Milk',2.34,'dairy');
INSERT INTO grocery_items (name, price, section) VALUES ('Mushrooms',16.68,'produce');
INSERT INTO grocery_items (name, price, section) VALUES ('Oil',5.25,'packaged');
INSERT INTO grocery_items (name, price, section) VALUES ('Onions',1.11,'produce');
INSERT INTO grocery_items (name, price, section) VALUES ('Orange Juice',2.52,'frozen');
INSERT INTO grocery_items (name, price, section) VALUES ('Oranges',3.40,'produce');
INSERT INTO grocery_items (name, price, section) VALUES ('Pasta',13.39,'bulk');
INSERT INTO grocery_items (name, price, section) VALUES ('Pizza',16.61,'frozen');
INSERT INTO grocery_items (name, price, section) VALUES ('Potatoes',13.29,'produce');
INSERT INTO grocery_items (name, price, section) VALUES ('Rice',5.23,'bulk');
INSERT INTO grocery_items (name, price, section) VALUES ('Salami',12.70,'meat');
INSERT INTO grocery_items (name, price, section) VALUES ('Soda',11.21,'miscellaneous');
INSERT INTO grocery_items (name, price, section) VALUES ('Sour Cream',1.73,'dairy');
INSERT INTO grocery_items (name, price, section) VALUES ('Tomatoes',1.56,'produce');
INSERT INTO grocery_items (name, price, section) VALUES ('Yogurt',18.67,'dairy');

INSERT INTO orders (id, shopper_id, total_cost) VALUES (1,4,11.98);
INSERT INTO orders (id, shopper_id, total_cost) VALUES (4,3,18.85);
INSERT INTO orders (id, shopper_id, total_cost) VALUES (3,9,24.4);
INSERT INTO orders (id, shopper_id, total_cost) VALUES (4,3,46.98);
INSERT INTO orders (id, shopper_id, total_cost) VALUES (5,2,40.64);
INSERT INTO orders (id, shopper_id, total_cost) VALUES (7,9,46.03);
INSERT INTO orders (id, shopper_id, total_cost) VALUES (7,5,9.83);
INSERT INTO orders (id, shopper_id, total_cost) VALUES (8,4,56.51);
INSERT INTO orders (id, shopper_id, total_cost) VALUES (1,1,59.37);
INSERT INTO orders (id, shopper_id, total_cost) VALUES (4,9,28.68);