import { Sequelize, DataTypes } from "sequelize";
import db from "../config/database.js";
import ProgressType from "./ProgressType.js";

const Progress = db.define(
  "Progress",
  {
    Name: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);
ProgressType.hasMany(Progress);
Progress.belongsTo(ProgressType);
export default Progress;
