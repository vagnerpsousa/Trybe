SELECT M.title, M.director, M.year, M.length_minutes 
FROM Movies M INNER JOIN BoxOffice B
ON M.id = B.movie_id
WHERE M.theater_id <> 0 
AND B.rating > 8;
