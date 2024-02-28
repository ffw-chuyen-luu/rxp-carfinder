## Next.js App Router - Car Finder
Key Features:
  * Next.js 14
  * Prisma ORM with PostgreSQL
  * Next Auth v5 (Auth.js)
  * Credentials Provider
  * Protected routes & redirect if logged
  * Server Actions
  * Forms
  * Client side and server-side form validation with zod

## Vercel demo site
https://rxp-carfinder.vercel.app/

## Local development
### Requirements
  * [Node - v18.17.1](https://nodejs.org/en/download/)
  * PostgreSQL v13 or greater
  * [docker compose](https://docs.docker.com/compose/), you can ignore this if you have local PostgreSQL

### Project Setup
  * `git clone git@github.com:ffw-chuyen-luu/rxp-carfinder.git rxp-carfinder`
  * `cd rxp-carfinder`
  * `npm install` to install packages
  * `cp .env.example .env`
  * `docker compose up -d` or update the `POSTGRES_PRISMA_URL` variable with your PostgreSQL connection in the `.env` file
  * Run `npx prisma db seed` on the the first time to import demo content.
  * `npm run dev`
  * Point your browser to: `http://localhost:3000`

### Other commands
  * `npx prisma generate` - Generate Prisma Client
  * `npx prisma migrate dev` - apply changes to a Prisma schema
  * `docker compose stop` - stop all docker containers
