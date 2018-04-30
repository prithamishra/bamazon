DROP DATABASE IF EXISTS bamazonDB;
CREATE database bamazonDB;

USE bamazonDB;

CREATE TABLE products (
  item_id INT(10) AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INT (100) NOT NULL,
  PRIMARY KEY (item_id)
);

Select * from products;

INSERT INTO `products` (`product_name`, `department_name`, `price`, `stock_quantity`)
VALUES
	('Java Book', 'Books', 119.99, 30),
	('Canon EOS Rebel T6i 24.2MP Digital SLR Camera', 'Camera', 799.00, 130),
	('Fit bit', 'Wearable technology', 119.99, 30),
	('timex watch', 'accessories', 319.99, 40),
	('tassel earring', 'accessories', 20.00, 30),
	('Under the dome', 'Books', 19.00, 20),
	('Echo(2nd generation)', 'Devices', 99.99, 30),
	('Echo Spot', 'Devices', 129.99, 30),
	('Trampoline', 'Fitness', 45.00, 30),
	('Exercise Ball', 'Fitness', 19.99, 30),
	('Mac Book Pro', 'Laptop', 1119.99, 30),
	('Nikon', 'Camera', 599.00, 130),
	('Apple Watch', 'Wearable technology', 399.99, 30),
	('Calculator', 'accessories', 120.00, 40),
	('Workout Bench', 'Fitness', 320.00, 30),
	('MongoDB', 'Books', 139.00, 20),
	('Next Thermostat', 'Devices', 99.99, 30),
	('Rolling pin', 'Kitchen accessories', 129.99, 30),
	('Corn hole', 'outdoor', 45.00, 30),
	('Tennis', 'Fitness', 29.99, 30);
