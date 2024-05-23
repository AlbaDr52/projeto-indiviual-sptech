drop database alba;

CREATE DATABASE alba;

USE alba;



CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50) unique,
	senha VARCHAR(50)
);



create table medida (
	id INT PRIMARY KEY AUTO_INCREMENT,
	reacao decimal(4,3),
	momento DATETIME,
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

insert into usuario (nome, email, senha) values 
('pablo','pablo','pablo');
insert into medida (reacao, momento, fk_usuario) values
('0.300',now(),'1');
insert into medida (reacao, momento, fk_usuario) values
('0.350',now(),'1');
insert into medida (reacao, momento, fk_usuario) values
('0.200',now(),'1');
insert into medida (reacao, momento, fk_usuario) values
('0.320',now(),'1');
insert into medida (reacao, momento, fk_usuario) values
('0.333',now(),'1');
select * from medida;
select * from usuario;

