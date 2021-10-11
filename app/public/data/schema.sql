CREATE DATABASE IF NOT EXISTS dshw5;
USE dshw5;

DROP TABLE IF EXISTS books;
CREATE TABLE books (
	id int PRIMARY KEY,
    title varchar(24),
    author varchar(48),
    publishYear int,
    publisher varchar(48),  
    pageNumber int, 
    msrp float
);

INSERT INTO books (id, title, author, publishYear, publisher, pageNumber, msrp) VALUES 
(1, 'How To Graduate Grad School', 'Jeff Yu', 2021, 'McGraw-Hill Education', 568, 599.99),
(2, 'MSIS 101', 'Class of 2021', 2022, 'Penguin/Random House', 897, 10000.00),
(3, 'Programming for Dumbies', 'Anonymous Professor', 2018, 'Harper Collins', 105, 1939.99),
(4, 'How to Get a Job', 'GCS', 2021, 'Simon and Schuster', 209, 899.99);

-- SELECT * FROM books;