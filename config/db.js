
// Configure Sequelize with a connection pool
// import dotenv from "dotenv";
// import { Sequelize } from "sequelize";

// dotenv.config();

// const dbConnection = new Sequelize(
//     process.env.DB_NAME,
//     process.env.DB_USER,
//     process.env.DB_PASSWORD,
//    {
//     dialect: "mysql",
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT, 
//     pool:{
//         max: 5, // Maximum number of connections in pool
//         min: 0, // Minimum number of connections in pool
//         acquire: 30000, // Maximum time, in milliseconds, to wait for a connection
//         idle: 10000, // Maximum time, in milliseconds, a connection can be idle before being released
//     },
//     logging: console.log,   
//    }
// )

// export default dbConnection;

import dotenv from "dotenv";
import { Sequelize } from "sequelize";

dotenv.config();

const dbConnection = new Sequelize(process.env.MYSQL_PUBLIC_URL, {
    dialect: "mysql",
    logging: console.log, // Optional: Enables SQL query logs
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
});

export default dbConnection;


