// import sequelize
import { Sequelize } from "sequelize";
// import connection
import db from "../config/database.js";
import CaseName from "./CaseName.js";
import CaseType from "./CaseType.js";
// init DataTypes
const { DataTypes } = Sequelize;

// Define schema
const Case = db.define(
  "Case",
  {
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
CaseName.belongsToMany(CaseType, { through: 'Case' });
CaseType.belongsToMany(CaseName, { through: 'Case' });
CaseName.hasMany(Case);
Case.belongsTo(CaseName);
CaseType.hasMany(Case);
Case.belongsTo(CaseType);
// Export model Product
export default Case;
