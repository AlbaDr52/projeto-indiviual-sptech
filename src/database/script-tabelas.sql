CREATE DATABASE albaTeste;

USE albaTeste;




CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50) unique,
	senha VARCHAR(255)
);

create table medida (
	id INT AUTO_INCREMENT,
	reacao decimal(4,3),
	momento DATETIME,
	fk_usuario INT not null,
    primary key (id, fk_usuario),
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);
insert into usuario (id, nome, email, senha)
values (1, 'pablo', 'pablo@gmail.com', sha2('pablo',256));

select * from usuario;

insert into medida (reacao, momento, fk_usuario)
values (0.250, now(), 1);

select * from medida;