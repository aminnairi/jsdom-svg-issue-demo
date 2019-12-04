.PHONY: install start

install:
	docker-compose run --rm npm install

start:
	docker-compose run --rm node ./main.js
