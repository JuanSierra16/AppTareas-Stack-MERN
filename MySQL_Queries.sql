create database MiSistemaAT;
use MiSistemaAT;
show tables;
CREATE TABLE tasks (
	id INTEGER PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(200) NOT NULL,
    description VARCHAR(300),
    done BOOLEAN NOT NULL DEFAULT 0,
    createAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
describe tasks;
select * from tasks;