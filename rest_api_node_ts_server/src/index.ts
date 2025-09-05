import colors from "colors";
import { server } from "./server";

const port = process.env.PORT || 4000

server.listen(port, ()=>{
  console.log(colors.yellow.bold(`Rest API en el puerto ${port}`))
})

/*
- npm init
- ts.config.json
- npm i -D typescript ts-node
- npm i -D nodemon
- "scripts": {
-   "dev": "nodemon --exec ts-node src/index.ts",
-   "build": "npx tsc"
- },
- npm i express 
- npm i -D @types/express 
- Postman
- ThunderClient
- EchoAPI
- separacion de rutas con Router de express.
- Base de datos en Render
ORM: sequelize //https://sequelize.org/docs/v6/getting-started/
  npm install sequelize
  npm i sequelize-typescript
  # One of the following:
  $ npm install --save pg pg-hstore # Postgres
  $ npm install --save mysql2
  $ npm install --save mariadb
  $ npm install --save sqlite3
  $ npm install --save tedious # Microsoft SQL Server
  $ npm install --save oracledb # Oracle Database
- config/db.ts
- dotenv //https://www.npmjs.com/package/dotenv
- dbeaver
- colors // https://www.npmjs.com/package/colors
- https://sequelize.org/docs/v7/models/data-types/
- npm i express-validator
- middleware
- get
- get:id
- post
- put
- patch
- delete
*/