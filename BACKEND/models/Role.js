// import sequelize
import { Sequelize } from "sequelize";
import Admin from "./Admin.js";
// import connection
import db from "../config/database.js";
// init DataTypes
const { DataTypes } = Sequelize;

// Define schema
const Role = db.define(
  "Role",
  {
    // Define attributes
    name: {
      type: DataTypes.STRING,
    },
  },
  {

    freezeTableName: true
  }
);

Role.hasMany(Admin);
Admin.belongsTo(Role);

// Export model Product
export default Role;
