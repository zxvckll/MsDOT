import { Sequelize } from "sequelize";
 
// create connection
const db = new Sequelize('msdot1', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});
 
// export connection
export default db;