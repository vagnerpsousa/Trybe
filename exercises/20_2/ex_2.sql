SELECT M.title, B.international_sales, B.domestic_sales
FROM Movies M INNER JOIN BoxOffice B 
ON M.id = B.movie_id
WHERE B.international_sales > B.domestic_sales;