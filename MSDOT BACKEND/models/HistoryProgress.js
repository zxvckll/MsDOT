// import sequelize
import { Sequelize } from "sequelize";
// import connection
import db from "../config/database.js";
import Nota from "./Nota.js";
import Progress from "./Progress.js";
// init DataTypes
const { DataTypes } = Sequelize;

// Define schema
const HistoryProgress = db.define(
  "HistoryProgress",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    deadline: {
      type: DataTypes.DATE,
    }
  },
  {
    freezeTableName: true

  }
);
Nota.belongsToMany(Progress, { through: 'HistoryProgress' });
Progress.belongsToMany(Nota, { through: 'HistoryProgress' });
Nota.hasMany(HistoryProgress);
HistoryProgress.belongsTo(Nota);
Progress.hasMany(HistoryProgress);
HistoryProgress.belongsTo(Progress);
// Export model Product
export default HistoryProgress;
