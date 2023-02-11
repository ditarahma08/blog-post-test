run_setup:
	cp .env.example .env
	npm install

run_lint:
	./node_modules/.bin/eslint .

run_local:
	npm run dev

run_docker:
	docker build --tag basecode:dev .
	docker run --name basecodeserver -d -p 3001:3000 basecode:dev
