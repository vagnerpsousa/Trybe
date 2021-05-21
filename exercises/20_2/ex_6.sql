SELECT M.title
FROM Movies M INNER JOIN BoxOffice B
ON M.id = B.movie_id
WHERE B.rating > 7.5;

SELECT title FROM Movies
WHERE id IN (
	SELECT movie_id
    FROM BoxOffice
    WHERE rating > 7.5);
