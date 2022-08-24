create database if not exists arg_prog;

use arg_prog;

create table paginas(
	id_pagina int not null auto_increment primary key,
    nombre varchar(50),
    web varchar(200),
    repositorio varchar(200)
);

create table usuarios(
	id_usu int not null auto_increment primary key,
    nombre varchar(50),
    apellido varchar(200),
    usu varchar(200),
    pass varchar(200)
);


insert into paginas (nombre, web, repositorio)values ('MarianoVillalonga','www.google.com.ar','www.github.com');
insert into usuarios (nombre, apellido, usu, pass)values ('Mariano','Villalonga','marianov', 'Mariano2022+');