all:
	docker-compose up

nest:
	npm run start:dev

migrate:
	npx prisma migrate dev --name init
	npm run seed

clean:
	sudo docker-compose down

fclean: clean
	docker-compose down

ffclean: clean
	docker system prune -af
	rm -rf db

re: fclean all