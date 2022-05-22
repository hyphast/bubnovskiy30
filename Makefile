build:
	docker build -t bub30 .
run-dev:
	docker run -e CHOKIDAR_USEPOLLING=true -d -v D:\Projects\bubnovskiy30\src:/usr/src/app/src -p 3000:3000 --name bub30con bub30
run-prod:
	docker run -d -p 8080:80 --name bub30con bub30
