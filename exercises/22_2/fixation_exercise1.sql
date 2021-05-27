DROP SCHEMA IF EXISTS normalization;
CREATE SCHEMA normalization;
USE normalization;

CREATE TABLE setor(
        setor_id INT PRIMARY KEY AUTO_INCREMENT,
        nome_setor VARCHAR(100) NOT NULL
    )ENGINE=InnoDB;
    
INSERT INTO normalization.setor(nome_setor)
VALUES('administração'), ('vendas'), ('operacional'), ('estrategico'), ('Marketing');
    
CREATE TABLE funcionario(
        funcionario_id INT PRIMARY KEY AUTO_INCREMENT,
        nome VARCHAR(100) NOT NULL,
        sobrenome VARCHAR(100) NOT NULL,
        email VARCHAR(200) NOT NULL,
        contato VARCHAR(100) NOT NULL,
        data_cadastro DATETIME NOT NULL
    )ENGINE=InnoDB;
    
INSERT INTO normalization.funcionario(nome, sobrenome, email, contato, data_cadastro)
VALUES
('Joseph', 'Rodrigues', 'jo@gmail.com', '(35)998552-1445','2020-05-05 08:50:25'),
('Andre','Freeman', 'andre1990@gmail.com', '(47)99522-4996', '2020-02-05 08:50:25'),
('Cíntia', 'Duval',	'cindy@outlook.com', '(33)99855-4669', '2020-05-05 10:55:35'),
('Fernanda', 'Mendes',	'fernandamendes@yahoo.com',	'(33)99200-1556',	'2020-05-05 11:45:40');

CREATE TABLE funcionario_setor(
		funcionario_id INT NOT NULL,
        setor_id INT NOT NULL,
        CONSTRAINT PRIMARY KEY(funcionario_id, setor_id),
        FOREIGN KEY (funcionario_id) REFERENCES funcionario (funcionario_id),
        FOREIGN KEY (setor_id) REFERENCES setor (setor_id)
    )ENGINE=InnoDB;

INSERT INTO funcionario_setor(funcionario_id, setor_id) 
VALUES(1, 1), (1, 2), (2, 3), (3, 4), (3, 2), (4, 5);
    
SELECT * FROM normalization.funcionario_setor;


	