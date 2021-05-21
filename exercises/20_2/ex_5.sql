SELECT T.Name, T.location, M.title, M.director, M.year, M.length_minutes
FROM Theater T RIGHT JOIN Movies M 
ON T.id = M.theater_id
ORDER BY T.Name;
