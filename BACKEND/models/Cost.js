// import sequelize
import { Sequelize } from "sequelize";
// import connection
import db from "../config/database.js";
// init DataTypes
const { DataTypes } = Sequelize;

// Define schema
const Cost = db.define(
  "Cost",
  {
    // Define attributes
    check_dp: {
      type: DataTypes.INTEGER,
    },
    recovery_data : {
      type: DataTypes.INTEGER,
    },
    backup_data: {
      type: DataTypes.INTEGER,
    },
    sent_data: {
      type: DataTypes.INTEGER,
    },
    cancel_recovery: {
      type: DataTypes.INTEGER,
    },
  },
  {

    freezeTableName: true
  }
);


// Export model Product
export default Cost;
