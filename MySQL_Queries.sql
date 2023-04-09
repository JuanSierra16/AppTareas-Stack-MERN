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
describe users;
select * from users;
ALTER TABLE tasks AUTO_INCREMENT = 1;
CREATE TABLE users (
	user_id INTEGER PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(60) NOT NULL
);
ALTER TABLE tasks ADD COLUMN user_id INT NOT NULL;
ALTER TABLE tasks ADD CONSTRAINT fk_tasks_users FOREIGN KEY (user_id) REFERENCES users(user_id);
SELECT * FROM tasks WHERE user_id NOT IN (SELECT user_id FROM users);
UPDATE tasks SET user_id = NULL WHERE user_id = 0;
DELETE FROM tasks WHERE id = 1;

/*Consultar las tareas de un usuario*/
SELECT t.id, t.title, t.description, t.done, t.createdAt
FROM tareas t
JOIN usuarios u ON t.user_id = u.id
WHERE u.id = 1;

/*Otra para consultar todas las tareas de un usuario es*/
SELECT * FROM tareas WHERE user_id = 3;

/*Consultar una sola tarea de un usuario*/
SELECT * FROM tareas WHERE id = 1 AND user_id = 3;

/*Crear una tarea para un Usuario*/
INSERT INTO tareas (title, description, done, createdAt, user_id) 
VALUES ('Completar proyecto', 'Terminar el proyecto de base de datos', false, '2023-04-07', 1);

/*Actualizar una tarea de un usuario*/
UPDATE tareas SET title = 'Nueva tarea' WHERE id = 1 AND user_id = 3;

/*Eliminar una tarea de un usuario*/
DELETE FROM tareas WHERE id = 1 AND user_id = 3;

ALTER TABLE tasks MODIFY COLUMN user_id INT DEFAULT NULL;
SELECT * FROM users WHERE email = "juanjose.sierra@utp.edu.co";