#### DB Setup:
-- Created the DB "wizard_schools_db" (only works on local connections)
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers(
    id int NOT NULL AUTO_INCREMENT,
    burger_name varchar(255) NOT NULL,
    devoured boolean,
    date timestamp,
    PRIMARY KEY (id)
);
