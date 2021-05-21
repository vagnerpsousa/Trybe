SELECT name, location FROM Theater T
WHERE NOT EXISTS (
	SELECT * FROM Movies
    WHERE theater_id = T.id
    );
