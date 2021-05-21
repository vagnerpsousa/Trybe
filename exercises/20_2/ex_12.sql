SELECT M.title FROM Movies M
WHERE M.id in (
	SELECT movie_id FROM BoxOffice
    WHERE (domestic_sales + international_sales) >= 500000000)
    AND M.length_minutes > 110;

SELECT M.title FROM Movies M 
INNER JOIN BoxOffice B ON M.id = B.movie_id
WHERE M.length_minutes > 110
AND B.domestic_sales + B.international_sales >= 500000000;
