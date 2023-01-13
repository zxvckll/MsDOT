// import sequelize
import { Sequelize } from "sequelize";
// import connection
import db from "../config/database.js";
import MediaInterface from "./MediaInterface.js"
import Merk from "../models/Merk.js"
// init DataTypes
const { DataTypes } = Sequelize;

// Define schema
const Media = db.define(
  "Media",
  {
    // Define attributes
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },

  },
  {
    freezeTableName: true

  }
);

MediaInterface.belongsToMany(Merk, { through: 'Media' });
Merk.belongsToMany(MediaInterface, { through: 'Media' });

MediaInterface.hasMany(Media);
Merk.hasMany(Media);
Media.belongsTo(MediaInterface);
Media.belongsTo(Merk);
// Export model Product
export default Media;
