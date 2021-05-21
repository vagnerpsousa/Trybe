USE Pixar;
SELECT m.title, b.domestic_sales, b.international_sales 
FROM BoxOffice b INNER JOIN Movies m
ON m.id = b.movie_id;