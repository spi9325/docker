## manual installiation

-install nodejs locally
-clone the repo
-install dependencies (npm install)
-start the db locally

- npx prisma migrate dev
- npx prisma generate
- npm run build
-npm run start


## docker instaliation

- install docker
- start a new network ` docker network create user_project `
- start postgres
  - docker run --network user_project -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgress
-build the image - `docker build --network=host -t user_project .`
-start the image - `docker run --network user_project -e DATABASE_URL=postgresql://postgres:mysecretpassword@postgres-container:5432/postgres -p 3000:3000 user_project`


## docker compose

-install docker docker compose
-run `docker compose up`