# API REST Cuentas por cobrar

### You need to have
 - Nodejs and npm
 - Postgress
 - TypeScript
 
 ### Installation
 After downloading the project run:

     npm install
  
  Go to the `ormconfig.json` file and modify its properties to configure the Postgres database that you are going to use. The properties that you need to configure are:

    "type": "postgres", // The models are designed to work for postgres datatypes
    "host": "localhost", // Or whatever host you have
    "port": 5432, // This is the default port
    "username": "[YOUR USERNAME OF YOUR DB]",
    "password": "[YOUR PASSWORD]",
    "database": "[YOUR DB name]"
  
No need to worry about the other properties for initialization.

When everything is done, you can run:

    npm run dev
It will create all the tables in the database for you and watch your changes thanks to `nodemon`
