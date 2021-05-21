SELECT T.id, T.name, T.location, M.* 
FROM Theater T LEFT JOIN Movies M 
ON T.id = M.theater_id
ORDER BY T.name;
