# flitter-app

## MongoDB
For the API to work it is necessary to have MongoDB installed. Once you do it, you should run a local MongoDB server:

```
./bin/mongod --dbpath ./data
```

## Deploy:

```sh
npm install
```

## Load initial data to database:

```
npm run init-db
```

## Start the application in production:

```sh
npm start
```

## Start the application in development:

```sh
npm run dev
```