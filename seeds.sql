USE bamazon;

CREATE TABLE products_(

id INT NOT NULL AUTO_INCREMENT,
product_name VARCHAR(45),
department_name  VARCHAR(45),
price DECIMAL(10, 2),
stock_quantity INT NOT NULL,
PRIMARY KEY (id)
)

INSERT INTO products_
(product_name, department_name, price, stock_quantity)
VALUES("iPhone", "Phones", 500.99, 10);

INSERT INTO products_
(product_name, department_name, price, stock_quantity)
VALUES("Cookies", "Food", 5.99, 5);

INSERT INTO products_
(product_name, department_name, price, stock_quantity)
VALUES("Oranges", "Food", 6.99, 15);

INSERT INTO products_
(product_name, department_name, price, stock_quantity)
VALUES("Android Phone", "Phones", 200.99, 100);

INSERT INTO products_
(product_name, department_name, price, stock_quantity)
VALUES("Pizza", "Food", 10.75, 20);

INSERT INTO products_
(product_name, department_name, price, stock_quantity)
VALUES("Xbox", "Video Games", 500.99, 100);

INSERT INTO products_
(product_name, department_name, price, stock_quantity)
VALUES("Playstaion", "Video Games", 600.99, 60);

INSERT INTO products_
(product_name, department_name, price, stock_quantity)
VALUES("Flat Screen", "TVs", 900.99, 75);

INSERT INTO products_
(product_name, department_name, price, stock_quantity)
VALUES("Notebooks", "Schoo/Office Supplies", 2.99, 50);

INSERT INTO products_
(product_name, department_name, price, stock_quantity)
VALUES("USB stick", "School/Office Supplies", 20.99, 35);
