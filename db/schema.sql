DROP DATABASE IF EXISTS projecttwo_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	id INTEGER AUTO_INCREMENT NOT NULL,
	burger_name VARCHAR(200) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
