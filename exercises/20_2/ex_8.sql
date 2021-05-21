SELECT name, location FROM Theater T
WHERE EXISTS (
	SELECT * FROM Movies
    WHERE theater_id = T.id
    );
