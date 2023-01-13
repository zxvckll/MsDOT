// import sequelize
import { Sequelize } from "sequelize";
// import connection
import db from "../config/database.js";
// init DataTypes
const { DataTypes } = Sequelize;

// Define schema
const User = db.define(
  "User",
  {
    // Define attributes
    name: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    city: {
      type: DataTypes.STRING,
    },
    office_phone: {
      type: DataTypes.INTEGER,
    },
    contact_person: {
      type: DataTypes.INTEGER,
    },
    home_phone: {
      type: DataTypes.INTEGER,
    },
    Email: {
      type: DataTypes.STRING,
      unique: true,
    },
  },
  {

    freezeTableName: true
  }
);
// Export model Product
export default User;
