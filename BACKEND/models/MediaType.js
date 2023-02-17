// import sequelize
import { Sequelize } from "sequelize";
// import connection
import db from "../config/database.js";
// init DataTypes
const { DataTypes } = Sequelize;

// Define schema
const MediaType = db.define(
  "MediaType",
  {
    name: {
      type: DataTypes.STRING,
    },
  },
  {

    freezeTableName: true
  }
);
// Export model Product
export default MediaType;
