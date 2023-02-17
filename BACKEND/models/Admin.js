// import sequelize

import { Sequelize } from "sequelize";
// import connection
import db from "../config/database.js";

// init DataTypes
const { DataTypes } = Sequelize;

// Define schema
const Admin = db.define(
  "Admin",
  {
    // Define attributes
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    refresh_token:{
        type: DataTypes.TEXT
    }
  },
  {
    freezeTableName: true

  }
);


// Export model Product
export default Admin;
