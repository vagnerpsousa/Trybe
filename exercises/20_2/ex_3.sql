SELECT M.title, B.rating 
FROM Movies M INNER JOIN BoxOffice B
ON M.id = B.movie_id
ORDER BY B.rating DESC;