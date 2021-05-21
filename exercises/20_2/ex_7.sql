SELECT rating FROM BoxOffice
WHERE movie_id IN (
	SELECT id FROM Movies
    WHERE year > 2009);
    
SELECT B.rating
FROM BoxOffice B INNER JOIN Movies M
ON B.movie_id = M.id
WHERE M.year > 2009; 
