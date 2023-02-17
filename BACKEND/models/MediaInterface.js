// import sequelize
import { Sequelize } from "sequelize";
// import connection
import db from "../config/database.js";
import MediaType from "./MediaType.js"

// init DataTypes
const { DataTypes } = Sequelize;

// Define schema
const MediaInterface = db.define(
  "MediaInterface",
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
MediaType.hasMany(MediaInterface);
MediaInterface.belongsTo(MediaType);
// Export model Product
export default MediaInterface;
