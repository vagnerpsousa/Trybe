SELECT A.title, A.length_minutes, B.title, B.length_minutes
FROM Movies A, Movies B
WHERE A.director = B.director AND A.title <> B.title;

